const createnoteService = async (title, text, category, file, token) => {
  //si quremos mandar un bofy form data es necesario crear objeto de este mismo tipo y pushera en el los elementos
  //que queremos enviar

  const formData = new FormData();
  console.log(category);
  formData.append('title', title);
  formData.append('text', text);
  formData.append('category', category);
  if (file) formData.append('image', file);
  const res = await fetch('http://localhost:8000/notes', {
    method: 'post',
    headers: {
      Authorization: token,
    },
    body: formData,
  });
  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default createnoteService;
