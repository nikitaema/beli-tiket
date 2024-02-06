    alert("Halooo  \n khusus umur 17 ke atas yaa");

    const umur = prompt("Masukkan umur kamu");
    if(umur >= 17) {
        const studio = prompt("pilih studio yang mau dipesan \n A: Studio A \n B: Studio B \n C: Studio C");

        if(studio == "A" || studio == "B" || studio == "C") {
            const film = prompt("pilih film \n 1: Frozen \n 2: DK Arthur \n 3: Zombie");

            let namaFilm;
            if (film == "1"){
                namaFilm = "Frozen";
            } else if (film == "2"){
                namaFilm = "DK Arthur";
            } else if (film == "3");{
                namaFilm = "Zombie";
            }

            if (film == "1" || film == "2" || film == "3") {
                const nama = prompt("masukkan nama");
                alert(`Ini Tiketmu \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm}`)
            } else {
                alert("maaf film tidak ada");
            }
        } else {
            alert(" pilih studio dulu");
        }
    } else { 
        alert("bocil dilarang disini");
    }                                                                                                                    