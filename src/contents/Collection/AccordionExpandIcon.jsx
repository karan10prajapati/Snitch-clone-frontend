import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState,useRef } from "react";
import { List, ListItem } from "@mui/material";
import { useEffect,useCallback } from "react";
import { getProduct } from "../../redux/slices/Product";
import { useDispatch, useSelector } from "react-redux";


export default function AccordionExpandIcon() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [filter, setFilter] = useState({});
  const [price, setPrice] = useState("");
  const [loading , setLoading]  = useState(false)
  const [page,setPage] = useState(1)

  let newFilter = {};

  const pageCountRef = useRef(); 

  const { pageCount } = useSelector((state) => state.product.paginator);

  useEffect(() => {
    pageCountRef.current = pageCount; 
  }, [pageCount]);
 

  const fetchfilterdata = async (isPush) => {
    try {
      const data = {
        page,
        limit: 12,
      };

      await dispatch(getProduct({ data, filter },isPush));
    } catch (error) {
      console.log(error)
    }
  };

 

  useEffect(() => {
    if (category.length > 0) {
      newFilter = { category };
    }

    if (color.length > 0) {
      newFilter = { ...newFilter, color };
    }

    if(price !== "" ){
        if( price === "under Rs 999" ){
          newFilter = { ...newFilter,"price.mrp":{"$lte":999}}
        }
        else if ( price === "Rs. 999 - Rs. 2999"){
          newFilter = { ...newFilter ,"price.mrp":{"$lte":2999, "$gte":999}}
        }
        else{
          newFilter = ({ ...newFilter ,"price.mrp":{"$lte":2999, "$gte" :5000} })
        }
    }

    setFilter(newFilter);
  }, [category, color ,price]);

  useEffect(() => {
    setPage(1);
    fetchfilterdata(false); 
  }, [filter]);

  useEffect(() =>{
    fetchfilterdata(true)
  },[page])

  const handleCheckboxChange = (option, brand) => (event) => {
    if (brand === "category") {
      if (event.target.checked) {
        setCategory((prevSelected) => [...prevSelected, option]);
      } else {
        setCategory((prevSelected) =>
          prevSelected.filter((item) => item !== option)
        );
      }
    }

    if (brand === "color") {
      if (event.target.checked) {
        setColor((prevSelected) => [...prevSelected, option]);
      } else {
        setColor((prevSelected) =>
          prevSelected.filter((item) => item !== option)
        );
      }
    }

    if (brand === "price") {
      if (event.target.checked) {
         setPrice(option)
      } else {
        setPrice("");
      }
    }
  };

  const columns1 = ["Blazer", "Trouser", "OverShirt", "Shirts"];
  const columns2 = ["Black", "Grey", "Navy", "Cream"];
  const columns3 = [
    "under Rs 999",
    "Rs. 999 - Rs. 2999",
    "Rs. 2999 - Rs. 5000",
  ];

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading) {
      console.log(pageCountRef.current,  page)
      if (page < pageCountRef.current) { 
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [loading,page]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="w-48">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Collection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {columns1 &&
              columns1.length > 0 &&
              columns1.map((option) => (
                <ListItem key={option}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={category.includes(option)}
                        onChange={handleCheckboxChange(option, "category")}
                        color="primary"
                      />
                    }
                    label={option}
                  />
                </ListItem>
              ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Colors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {columns2 &&
              columns2.length > 0 &&
              columns2.map((option) => (
                <ListItem key={option}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={color.includes(option)}
                        onChange={handleCheckboxChange(option, "color")}
                        color="primary"
                      />
                    }
                    label={option}
                  />
                </ListItem>
              ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
          {columns3 &&
              columns3.length > 0 &&
              columns3.map((option) => (
                <ListItem key={option}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={price === option}
                        onChange={handleCheckboxChange(option, "price")}
                        color="primary"
                      />
                    }
                    label={option}
                  />
                </ListItem>
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
