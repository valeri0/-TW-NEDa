Pentru baza de date...
1.creati un proiect nou folosind scriptul de la sgbd (numele si parola vor fi tw)
2.Dupa ce faceti proiectul o sa importati 2 excel-uri :
	2.1 Primul excel este Key Government Figures - Nepal Earthquake - 2015(va intereseaza doar tabelul de pe 1-June-2015) din care se obtin 2 tabele Population si Households
	2.2 Al doilea, 170325_4W_National_R28_Public  va fi folosit pentru tabelul partners (aveti grija la coloanele alacatuite din mai multe cuvinte puneti '_' in loc de ' '(spatiu))

O sa va dau si poze sa vedeti de ce coloane aveti nevoie in fiecare tabel.

3.Dupa ce faceti tabelul partners, adaugati o coloana in el, numita zone(puteti sa faceti asta din developer cu click-dreapta add column...ceva de genul)
4.Scrieti procedura urmatoare si apoi rulati-o

create or replace procedure insert_zones  AS
  CURSOR get_zone IS  
    select distinct district, zone from district;
    v_zone district.zone%type;
    v_district district.district%type;
BEGIN
  open get_zone;
  loop
    FETCH get_zone INTO v_district, v_zone;
    EXIT WHEN get_zone%NOTFOUND;
    dbms_output.put_line(v_district||' '||v_zone);
    update partners
    set zone = v_zone
    where district=v_district;
  end loop;
  close get_zone;
END;

And that's it...

