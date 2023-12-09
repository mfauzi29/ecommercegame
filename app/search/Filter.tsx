import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";

const getData = async () => {
  try {
    // Replace this query with your actual Sanity query to fetch categories
    const query = `*[_type == "category"] {
      name
    }`;

    const categories = await client.fetch(query);

    // Extract category names from the response
    const categoryNames = categories.map(category => category.name);

    setCategories(categoryNames);
  } catch (error) {
    console.error('Error fetching categories from Sanity:', error);
  }
};
