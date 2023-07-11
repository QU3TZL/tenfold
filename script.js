document.addEventListener('DOMContentLoaded', function() {
  const filepondElements = document.querySelectorAll('.filepond');

  filepondElements.forEach(function(element, index) {
    FilePond.create(element, {
      server: {
        url: 'https://renderdisk.onrender.com',
        process: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          onload: response => console.log(response),
          onerror: error => console.log(error),
          ondata: formData => {
            formData.append('folder', 'folder' + (index + 1));
            return formData;
          }
        }
      },
      allowMultiple: true
    });
  });
});
