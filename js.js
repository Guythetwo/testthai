document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files; // เลือกไฟล์ทั้งหมดที่ผู้ใช้เลือก
    if (files.length > 0) {

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Check if the file is an image
            if (file.type.startsWith('image/')) {
                const reader = new FileReader(); // ใช้อ่านไฟล์

                reader.onload = function(e) {
                    ranmath = Math.floor(Math.random() * (200 - 10)) + 10;
                    const img = document.createElement('img');
                    img.src = e.target.result; // กำหนดค่า src ของ <img> จากไฟล์ที่เลือก
                    img.alt = "รูปที่อัปโหลด";
                    img.classList.add('move-left');
                    img.style.width = "30%"; // กำหนดขนาดรูปภาพ
                    img.style.height = "auto"; // ความสูงอัตโนมัติ
                    img.style.margin = "10px"; // เพิ่มช่องว่างระหว่างภาพ
                    img.style.position = "absolute";
                    console.log(ranmath + 200 + "px")
                    img.style.top = (ranmath + 200) + "px"

                    // แสดงรูปภาพใน container
                    document.getElementById('imageContainer').appendChild(img);
                }

                reader.onerror = function() {
                    console.error('Error reading the file');
                };

                document.getElementById('fileInput').value = '';

                reader.readAsDataURL(file); // อ่านไฟล์เป็น Data URL
            } else {
                alert('กรุณาเลือกไฟล์ภาพเท่านั้น');
            }
        }
    }
});

function clean() {
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('fileInput').value = '';
}