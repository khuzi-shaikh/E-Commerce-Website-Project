import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Badge,
} from "@mui/material";
import axios from "axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { addQuantity } from "../Utility";

export const Home = () => {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [addtoCart, setAddtoCart] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData( addQuantity( res.data));
    setCopyData(addQuantity(res.data));
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    // console.log(response);
    setCategory([...response.data, "All"]);
  };
  const handleAddtoCart = (item) => {
    const duplicateCard = addtoCart.some((elem) => elem.id == item.id);
    if (!duplicateCard) {
      setAddtoCart([...addtoCart, item]);
    }
  };
  // const handleFilter = (value) => {
  //   const searchData = copyData.filter((item) =>
  //     item.title.toUpperCase().includes(value.toUpperCase())
  //   );
  //   setData(searchData);
  // };
  const handleButtonSearch = (userCategory) => {
    if ("All" == userCategory) {
      setData(copyData);
    } else {
      const searchCategory = copyData.filter((item) =>
        item.category.includes(userCategory)
      );
      setData(searchCategory);
    }
  };
  const handleNavigate = (item) => {
      // console.log(item);
      navigate("./Detail",{state:item})
  }
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const searchData = copyData.filter((item) =>
      item.title.toUpperCase().includes(search.toUpperCase())
    );
    setData(searchData);
  }, [search]);
  return (
    <div>
      <Grid container spacing={4} style={{ marginTop: 0 }}>
        {category.map((item) => {
          return (
            <Grid item xs={item == "All" ? 1 : 2}>
              <Button
                variant="contained"
                className="Butto-container"
                onClick={() => handleButtonSearch(item)}
              >
                {item}
              </Button>
            </Grid>
          );
        })}
        {/* <Grid item xs={2}>
          <Button
            variant="contained"
            className="Butto-container"
            onClick={() => handleButtonSearch("women's clothing")}
          >
            Women
          </Button>
        </Grid> */}
        {/* <Grid item xs={2}>
          <Button
            variant="contained"
            className="Butto-container"
            onClick={() => handleButtonSearch("electronics")}
          >
            Electric
          </Button>
        </Grid> */}
        {/* <Grid item xs={2}>
          <Button
            variant="contained"
            className="Butto-container"
            onClick={() => handleButtonSearch("jewelery")}
          >
            Jewelery
          </Button>
        </Grid> */}
        {/* <Grid item xs={1}>
          <Button
            variant="contained"
            className="Butto-container"
            onClick={() => handleButtonSearch("All")}
          >
            All
          </Button>
        </Grid> */}
        <Grid item xs={2}>
          <TextField
            label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Badge color="secondary" badgeContent={addtoCart.length} showZero>
            <ShoppingCartIcon
              style={{ color: "#1976d2", fontSize: 40, cursor: "pointer" }}
            />
          </Badge>
        </Grid>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} md={3} key={index}>
              <Card sx={{ height: 440 }}>
                <CardContent>
                  <img
                    src={item.image}
                    width={200}
                    height={200}
                    style={{ position: "relative", left: 55 }}
                  />
                  <h3>
                    Title: {item.title.substring(0, 20)}{" "}
                    {item.title.length > 20 && "..."}
                  </h3>
                  <h4>Price: ${item.price}</h4>
                  <Button variant="contained" color="error" onClick={()=>handleNavigate(item)}>
                    Detail
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ position: "relative", left: 105 }}
                    onClick={() => handleAddtoCart(item)}
                  >
                    Add To Card
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
