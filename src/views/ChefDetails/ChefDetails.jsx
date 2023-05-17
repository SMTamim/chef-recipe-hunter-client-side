import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefBanner from "../ChefBanner/ChefBanner";
import Recipes from "../Recipes/Recipes";

const ChefDetails = () => {
  const recipes = useLoaderData();
  const [chef, setChef] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchChef = async () => {
      const res = await fetch(`https://chef-recipe-hunter-server-smtamim.vercel.app/chefs/${id}`);
      const chefData = await res.json();
      setChef(chefData);
    };
    fetchChef();
  }, []);

  return (
    <div className="px-20 mt-5 lg:px-40">
      <ChefBanner chef={chef}/>
      <Recipes recipes={recipes}/>
    </div>
  );
};

export default ChefDetails;
