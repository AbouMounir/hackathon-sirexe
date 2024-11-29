import axios from 'axios';

const postGold = async (goldWeight,karatValue,dataImage) => {
  if (!datas || !dataImage) {
    alert("Veuillez remplir les formulaires");
    return;
  }

  setLoading(true); // Afficher un indicateur de chargement pendant l'upload

  var myHeaders = new Headers();
  myHeaders.append("Content-Type","multipart/form-data")

  const formData = new FormData();

  // Ajouter l'image à FormData
  formData.append('photo', {
    uri: dataImage,
    name: 'photo.jpg', // nom de l'image
    type: 'image/jpeg', // type MIME de l'image
  });


  try {
    const response = await axios.post('http://192.168.10.226:6060/declaration/declarer', 
        {...formData,}, {
      headers: {
        'Content-Type': 'multipart/form-data', // Indiquer que nous envoyons un fichier
      },
    });

    if (response.data.success) {
      alert("Data sent successfully!");
    } else {
      alert("Data sent failed!");
    }
  } catch (error) {
    console.error("Error sending image:", error);
    alert("An error occurred while sending the image.");
  } finally {
    setLoading(false); // Désactiver l'indicateur de chargement
  }
};
