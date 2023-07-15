// Fetch all the FilePond elements and initialize them
const filePonds = document.querySelectorAll('.filepond');

// Convert NodeList to an Array
const filePondArray = Array.from(filePonds);

filePondArray.forEach((fp, index) => {
  const pond = FilePond.create(fp, {
    name: `filepond${index + 1}`,
    server: {
      url: 'https://renderdisk.onrender.com/upload',
      process: `/${index + 1}`
    },
    labelIdle: 'Drop your files here or <span class="filepond--label-action"> Browse </span>',
  });

  // Listen to addfile event to update table
  pond.on('addfile', (error, file) => {
    if (error) {
      console.log('Add file failed', error);
      return;
    }
    
    // If no error, update the table
    const table = document.querySelector(`#table${index + 1}`);
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    // Date added
    const currentDate = new Date();

    cell1.innerHTML = file.filename;
    cell2.innerHTML = file.fileSize;
    cell3.innerHTML = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
  });
});
