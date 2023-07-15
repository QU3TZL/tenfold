const filePondInstances = document.querySelectorAll('.filepond');

filePondInstances.forEach((inputElement, index) => {
  const pond = FilePond.create(inputElement, {
    server: {
      url: 'https://renderdisk.onrender.com/upload',
      process: {
        url: `/folder${index+1}`,
        method: 'POST'
      }
    }
  });
});
