# Online Store - FrontEnd

## Proiectare:
Am ales React pentru front-end-ul aplicatiei datorita flexibilitatii si performantei pe care le ofera. React este o biblioteca JavaScript populara, care permite crearea de interfete de utilizator rapide si interactive. Unul dintre principalele avantaje ale React este capacitatea sa de a utiliza componente reutilizabile, ceea ce faciliteaza dezvoltarea si intretinerea codului. De asemenea, React foloseste un DOM virtual care optimizeaza actualizarile si redarile, imbunatatind astfel performanaa aplicatiei. In plus, React beneficiaza de o comunitate vasta si activa, ceea ce inseamna acces la o multime de resurse, biblioteci si suport, accelerand procesul de dezvoltare si rezolvarea problemelor.
La proiect am folosit, de asemenea, Bootstrap si Axios.
Bootstrap este un framework CSS foarte popular, care permite crearea rapida si usoara a unor interfete de utilizator responsive si moderne. Este apreciat in mod special pentru urmatoarele motive:
- Bootstrap este proiectat pentru a asigura ca aplicatiile arata bine pe o gama larga de dispozitive, de la telefoane mobile la desktop-uri. 
- Bootstrap vine cu un set de componente UI predefinite, precum butoane, formulare, carduri, navigatie, si multe altele. Aceste componente sunt stilizate uniform si pot fi integrate rapid in proiect, economisind timp si efort în dezvoltarea designului.
- Bootstrap beneficiaza de o documentatie detaliata si de o comunitate vasta de dezvoltatori. Aceasta face ca invatarea si rezolvarea problemelor sa fie mult mai usoare, deoarece exista numeroase tutoriale, exemple si resurse disponibile online.

Axios este o biblioteca JavaScript utilizata pentru efectuarea de cereri HTTP, promitand o experienta mai simpla si mai flexibila comparativ cu fetch API nativ din JavaScript. Principalele avantaje ale folosirii Axios includ:
- Axios ofera o sintaxa simplificata si intuitiva pentru efectuarea de cereri HTTP, ceea ce face codul mai curat si mai usor de intretinut. Prin folosirea Axios, codul pentru gestionarea cererilor HTTP devine mai concis și mai lizibil.
- Axios se bazează pe promisiuni, ceea ce permite un flux de lucru asincron, usor de gestionat. Acesta suporta atat then/catch, cat si async/await, facilitand scrierea unui cod asincron clar si eficient.
- Axios permite configurarea interceptoarelor pentru cereri si raspunsuri, ceea ce este extrem de util pentru gestionarea globala a erorilor, autentificarea cererilor, si alte manipulari comune. Aceasta ofera un nivel suplimentar de control asupra interactiunilor HTTP.

## Implementare:
Am implementat front-end-ul aplicatiei folosind React si am integrat mai multe functionalitati esentiale pentru gestionarea utilizatorilor, clientilor, produselor si comenzilor. Iata o descriere detaliata a acestor functionalitati si modul in care le-am legat de backend-ul dezvoltat in Java Spring Boot prin intermediul cererilor HTTP folosind Axios.

#### Login/Sign Up
Am creat pagini de autentificare si inregistrare pentru utilizatori, unde acestia pot introduce datele necesare pentru a se conecta sau a-si crea un cont nou. Formularele de login si sign up colecteaza informatiile utilizatorilor si trimit aceste date catre backend prin cereri HTTP POST utilizand Axios. La login, datele sunt verificate pe server, iar in cazul unui răspuns pozitiv, utilizatorul este redirectionat catre pagina principala a aplicatiei. In cazul inregistrarii, datele sunt validate si stocate in baza de date, iar utilizatorul primeste un raspuns adecvat.

#### Adaugare Client
Functionalitatea de adaugare a unui client permite utilizatorilor sa introduca detalii despre noi clienti. Am creat un formular React care preia aceste date si le trimite catre backend printr-o cerere HTTP POST. Serverul Spring Boot primeste datele, le valideaza si, daca totul este in regula, adauga noul client in baza de date si returneaza un raspuns care confirma succesul operatiunii.

#### Vizualizare si Cautare Clienti
Pentru a vedea toti clientii, am implementat o functionalitate care trimite o cerere HTTP GET catre server, care returneaza lista de clienti stocata in baza de date. Aceasta lista este afisata intr-un tabel pe interfata utilizatorului. Functia de cautare permite utilizatorilor sa gaseasca rapid un client specific, trimitand o cerere HTTP GET cu parametrii de cautare(id) catre server, care raspunde cu rezultatele relevante.

#### Stergere Clienti
Functionalitatea de stergere a clientilor permite utilizatorilor sa elimine clienti din baza de date. In interfata aplicatiei, utilizatorii au optiunea de a selecta un client din lista afisata si de a initia procesul de stergere. Odata ce utilizatorul confirma dorinta de a sterge un client, o cerere HTTP DELETE este trimisa catre backend prin intermediul Axios. Backend-ul Java Spring Boot primeste cererea, identifica clientul corespunzator in baza de date si al elimina. Dupa stergere, serverul returneaza un raspuns de succes, iar front-end-ul actualizeaza automat lista de clienti pentru a reflecta schimbarile, asigurand astfel o experienta de utilizare fara intreruperi.

#### Editare Clienti
Functionalitatea de editare a clientilor permite utilizatorilor sa actualizeze informatiile unui client existent. Cand utilizatorul doreste sa editeze un client, datele curente ale acestuia sunt preluate si afisate intr-un formular. Dupa modificarea datelor, acestea sunt trimise catre backend printr-o cerere HTTP PUT, care actualizeaza informatiile clientului in baza de date si returneaza un raspuns de confirmare.

#### Gestionarea Produselor si Comenzilor
Am implementat aceleasi functionalitati (adaugare, vizualizare, cautare, stergere si editare) si pentru produse si comenzi. Utilizatorii pot adauga noi produse si comenzi, vizualiza toate produsele si comenzile existente, cauta anumite produse si comenzi si edita informatiile acestora. Toate aceste operatiuni sunt gestionate prin cereri HTTP (POST pentru adaugare, GET pentru vizualizare si căutare, PUT pentru editare), utilizând Axios pentru a comunica cu backend-ul.

## Conexiunea intre Front-end si Back-end
Toate aceste functionalitati sunt legate de backend-ul Java Spring Boot prin cereri HTTP standardizate. Axios este utilizat pentru a gestiona aceste cereri, trimitand datele catre endpoint-urile corespunzatoare ale serverului si preluand raspunsurile. In backend, fiecare cerere este tratata de un controller specific, care efectuează operatiile necesare (validare, salvare, actualizare, stergere) si returneaza un raspuns adecvat catre front-end. Aceasta abordare asigura o comunicare eficienta si securizata intre front-end si back-end, permitand utilizatorilor sa gestioneze datele intr-un mod intuitiv si performant.





