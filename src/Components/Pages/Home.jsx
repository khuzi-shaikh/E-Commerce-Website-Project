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
import {
  addQuantity,
  handleDecrimentQty,
  handleIncrementQty,
} from "../Utility";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const Home = () => {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [addtoCart, setAddtoCart] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(addQuantity(res.data));
    setCopyData(addQuantity(res.data));
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategory([...response.data, "All"]);
  };
  const handleAddtoCart = (item) => {
    const duplicateCard = addtoCart.some((elem) => elem.id == item.id);
    if (!duplicateCard) {
      setAddtoCart([...addtoCart, item]);
    }
  };
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
    navigate("./Detail", { state: item });
  };
  const handleIncrement = (id) => {
    const res = handleIncrementQty(copyData, id);
    setData(res);
    setCopyData(res);
  };
  const handleDecriment = (id) => {
    const res = handleDecrimentQty(copyData, id);
    setData(res);
    setCopyData(res);
  };
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
                  <h4>Price: $ {item.price}</h4>
                  <h2>
                    {" "}
                    <span>
                      <RemoveIcon
                        className="AddIcon"
                        onClick={() =>
                          item.userQuantity > 0 && handleDecriment(item.id)
                        }
                      />
                    </span>{" "}
                    {item.userQuantity}{" "}
                    <span>
                      <AddIcon
                        className="AddIcon"
                        onClick={() => handleIncrement(item.id)}
                      />
                    </span>{" "}
                  </h2>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleNavigate(item)}
                  >
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