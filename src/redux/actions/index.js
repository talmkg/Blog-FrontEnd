export const FETCH_BLOGS = "FETCH_BLOGS";
export const SET_ID = "SET_ID";

export const getBlogs = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("https://main.up.railway.app/blogs");
      if (response.ok) {
        const blogs = await response.json();
        console.log("Blogs are here", blogs);
        dispatch({
          type: FETCH_BLOGS,
          payload: blogs,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const newPostAction = (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(`https://main.up.railway.app/blogs/`, options);
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: SET_ID,
          payload: data.id,
        });
        console.log(data);
      } else {
        console.log("Couldn't post");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const addCoverAction = (id, data) => {
  const options = {
    method: "PUT",
    body: data,
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  };
  return async () => {
    try {
      let response = await fetch(
        `https://main.up.railway.app/blogs/${id}/cover`,
        options
      );
      if (response.ok) {
        console.log("Added cover successfully");
        alert("Cover was added successfully.");
      } else {
        console.log("There was an error posting data");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
