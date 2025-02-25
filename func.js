const Pitanja = [
    {
        pitanje: "Ko je autor najpoznatijeg dela srpske književnosti Na Drini ćuprija?",
        odgovori: ['Ivo Andrić', 'Danilo Kiš', 'Meša Selimović', 'Borislav Pekić'],
        tacanodgovor: 'Ivo Andrić'
    },
    {
        pitanje: "Koji je najpoznatiji srpski tradicionalni instrument?",
        odgovori: ['Harmonika', 'Gudalo', 'Tambura', 'Tuba'],
        tacanodgovor: 'Gudalo'
    },
    {
        pitanje: "Koja srpska manastir je pod zaštitom UNESCO-a i poznata je po freskama iz 14. veka?",
        odgovori: ['Manastir Studenica', 'Manastir Hilandar', 'Manastir Gračanica', 'Manastir Sopoćani'],
        tacanodgovor: 'Manastir Sopoćani'
    },
    {
        pitanje: "Ko je srpski pesnik poznat po pesmi Tamo daleko?",
        odgovori: ['Aleksa Šantić', 'Jovan Dučić', 'Milan Rakić', 'Gavrilo Princip'],
        tacanodgovor: 'Aleksa Šantić'
    },
    {
        pitanje: "Koji je srpski grad poznat po tom što se u njemu nalazi najstarija pravoslavna crkva u Srbiji?",
        odgovori: ['Novi Sad', 'Beograd', 'Niš', 'Peca'],
        tacanodgovor: 'Niš'
    },
    {
        pitanje: "Ko je bio prvi predsednik Jugoslavije?",
        odgovori: ['Josip Broz Tito', 'Vojislav Koštunica', 'Slobodan Milošević', 'Svetozar Marković'],
        tacanodgovor: 'Josip Broz Tito'
    },
    {
        pitanje: "Koja je najveća reka u Srbiji?",
        odgovori: ['Morava', 'Dunav', 'Drina', 'Sava'],
        tacanodgovor: 'Dunav'
    },
    {
        pitanje: "Koji srpski film je osvojio Oskara za najbolji strani film?",
        odgovori: ['No Man’s Land', 'Parada', 'Montevideo', 'Crna mačka, beli mačor'],
        tacanodgovor: 'No Man’s Land'
    },
    {
        pitanje: "Koja srpska pevačica je poznata po pesmi ‘Molitva’?",
        odgovori: ['Ceca', 'Jelena Karleuša', 'Marija Šerifović', 'Ana Bekuta'],
        tacanodgovor: 'Marija Šerifović'
    },
    {
        pitanje: "Ko je bio najmlađi Nobelov laureat iz Srbije?",
        odgovori: ['Ivo Andrić', 'Danilo Kiš', 'Miloš Crnjanski', 'Boris Tadić'],
        tacanodgovor: 'Ivo Andrić'
    }
];

    let IndexPitanja = 0;
    let broj_gresaka = 0;
    let DivOpcije = document.querySelector('.opcije')
    let TextPitanja = document.querySelector('.pitanjetekst')
    let DugmeNext = document.querySelector('.next')

    //Setup Page
    TextPitanja.style.display = 'none'


    function ProveriTacnost(dugme,odgovor,tacanodgovor) {
        if (odgovor === tacanodgovor) {
            console.log('Tacan')
            console.log(IndexPitanja)
           
            IndexPitanja++
            if (IndexPitanja == Pitanja.length + 1) {
                //IndexPitanja = 0
             DivOpcije.innerHTML = ''
              
               let button = document.createElement('button')
                button.textContent = 'Započni opet'
                DivOpcije.appendChild(button)
                TextPitanja.textContent = 'Čestitamo Završili ste Kviz, imali ste ' + broj_gresaka  + ' netačna odgovora!'
                button.addEventListener('click', function() {
                      DivOpcije.innerHTML = ""
                      IndexPitanja = 0;
                      UcitajKviz()
                })
                console.log('test')
                
               
            }
           
           
            UcitajKviz()
        } else {
            console.log('Ne tacan odgovor')
            broj_gresaka++;
            alert('Odgovor nije tacan!')
            
        }

        
    }



    function UcitajKviz() {
        TextPitanja.style.display = 'block'
           if (IndexPitanja < Pitanja.length) {
        DivOpcije.innerHTML = ''
        const TrenutnoPitanje = Pitanja[IndexPitanja]
        TextPitanja.textContent = TrenutnoPitanje.pitanje
        TrenutnoPitanje.odgovori.forEach((odgovor) => {
            let dugme = document.createElement('button')
            dugme.textContent = odgovor
            DivOpcije.appendChild(dugme)
            dugme.addEventListener('click', function() {
                ProveriTacnost(dugme,odgovor,TrenutnoPitanje.tacanodgovor)
           
            })   
        
        }) 
        
    }
   
    }
