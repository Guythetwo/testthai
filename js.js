var cout = 0;

document.getElementById("fileInput").addEventListener("change", function() {
    var fileName = this.files.length > 0 ? this.files[0].name : "No file chosen";
    document.getElementById("fileLabel").textContent = fileName;
  });

document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const Text = document.getElementById("fname").value;
    const nameText = document.getElementById("name").value;
    const set = document.getElementById("SET")
    const mainset = document.getElementById("mainset")
    const fileLabel = document.getElementById("fileLabel")
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    if (document.getElementById('fname').value != '' && document.getElementById('name').value != '') {
                        console.log("LOAD BOAT")
                        potop = Math.floor(Math.random() * (200 - 10)) + 10 + 240;
                        const container = document.createElement('div');
                        container.classList.add('move-container');
                        container.style.top = potop + "px";
                        container.id = "img" + cout;
                        container.style.zIndex = potop;
                        
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = "รูปที่อัปโหลด";
                        
                        const h1 = document.createElement('h1');
                        h1.innerHTML = Text + "<br>" + "BY : " + nameText;
                        
                        container.appendChild(img);
                        container.appendChild(h1);
                        document.getElementById('imageContainer').appendChild(container);
                        cout += 1;
                        set.style.display = "none";
                        mainset.style.display = "block";
                        } else {
                            console.log("ERROR BOAT!")
                        }

                        document.getElementById('fileInput').value = '';
                        document.getElementById('fname').value = '';
                        document.getElementById('name').value = '';
                        fileLabel.innerHTML = 'สร้างกระทง';
                };

                reader.onerror = function() {
                    console.error('Error reading the file');
                };

                reader.readAsDataURL(file);
            } else {
                alert('กรุณาเลือกไฟล์ภาพเท่านั้น');
            }
        }
    }
});

function clean() {
    const set = document.getElementById("SET");
    const mainset = document.getElementById("mainset");
    set.style.display = "none";
    mainset.style.display = "block";
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('fileInput').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('name').value = '';
}

function mainset() {
    const set = document.getElementById("SET");
    const mainset = document.getElementById("mainset");
    set.style.display = "block";
    mainset.style.display = "none";
}