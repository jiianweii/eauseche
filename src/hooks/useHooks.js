///////////////////////////////////////////////////////////////////////
// Products
export const useCreateProduct = async (product) => {
  product.colours = product.colours.split(",");
  product.size = product.size.split(",");

  const URL = "https://apieauseche-9ajc125k.b4a.run/products/add";
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return data;
};

export const useUpdateProduct = async (product, id) => {
  product._id = id;

  const URL = "https://apieauseche-9ajc125k.b4a.run/products/update";
  const data = await fetch(URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return data;
};

export const useDeleteProduct = async (id) => {
  const URL = "https://apieauseche-9ajc125k.b4a.run/products/remove";
  const data = await fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });

  return data;
};

export const useFetchAllProducts = async () => {
  const products = await fetch(`https://apieauseche-9ajc125k.b4a.run/products`);
  const res = await products.json();

  return res;
};

export const fetchProducts = async (gender, type, sort, page) => {
  const g = gender ? "/" + gender : "";
  const t = type ? "type=" + type : "";
  const s = sort ? "sort=" + sort : "";
  const p = page ? "page=" + page : "";

  const x = type && s ? "&" : "";
  const px = type || sort ? "&" : "";
  const q = type || sort || page ? "?" : "";

  const products = await fetch(
    `https://apieauseche-9ajc125k.b4a.run/products${g}${q}${t}${x}${s}${px}${p}`
  );

  return products;
};

export const useFetchProductById = async (gender, id) => {
  const URL = `https://apieauseche-9ajc125k.b4a.run/products/${gender}/${id}`;

  return await fetch(URL);
};

///////////////////////////////////////////////////////////////////////
// USERS

export const createUser = async (user) => {
  const URL = `https://apieauseche-9ajc125k.b4a.run/users/signup`;
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return data;
};

export const authUser = async (user) => {
  const URL = `https://apieauseche-9ajc125k.b4a.run/users/login`;
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return data;
};

///////////////////////////////////////////////////////////////
// Orders

export const useFetchOrders = async () => {
  const token = localStorage.getItem("jwt");
  const URL = `https://apieauseche-9ajc125k.b4a.run/orders`;
  const data = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await data.json();

  return res;
};

export const useFetchOrdersById = async (id) => {
  const token = localStorage.getItem("jwt");
  const URL = `https://apieauseche-9ajc125k.b4a.run/orders/${id}`;
  const data = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await data.json();

  return res;
};

export const useCreateOrder = async (order) => {
  const token = localStorage.getItem("jwt");
  const URL = `https://apieauseche-9ajc125k.b4a.run/orders/add`;
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });

  return data.json();
};

export const useUpdateStatus = async (id, status) => {
  const URL = `https://apieauseche-9ajc125k.b4a.run/orders/order/${id}`;
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status,
    }),
  });

  return data;
};

////////////////////////////////////////////////////////////////////////
// Reviews

export const getAllReviews = async () => {
  const URL = `https://apieauseche-9ajc125k.b4a.run/reviews`;
  const data = await fetch(URL);
  const res = await data.json();

  return res;
};

export const getReviewById = async (id) => {
  const URL = `https://apieauseche-9ajc125k.b4a.run/reviews/${id}`;
  const data = await fetch(URL);
  const res = await data.json();

  return res;
};
