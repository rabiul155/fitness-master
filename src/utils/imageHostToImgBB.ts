export const imageHostToImgBB = async (image: any) => {
  const formData = new FormData();
  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=a638af240b9ce285b10997fc3495372b`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const imgData = await response.json();
    console.log(imgData);
    return imgData.data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
