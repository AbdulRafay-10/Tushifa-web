const getHeader = (formData = false) => {
  const header = formData
    ? {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      }
    : {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
  return header;
};

export default getHeader;
