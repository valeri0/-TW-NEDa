create table damages(
  name varchar2(255),
  risk varchar2(10),
  description varchar2(1000),
  longitude number,
  latitude number
);
/

update damages set risk='med' where risk='medium';
/

alter table damages add id number;
/

declare
  v_id number;
  cursor iterator is select * from damages;
  v_name damages.name%type;
  v_risk damages.risk%type;
  v_desc damages.description%type;
  v_lat damages.latitude%type;
  v_lng damages.longitude%type;
  v_aux_id number;
begin
  v_id := 0;
  open iterator;
    loop
      fetch iterator into v_name, v_risk, v_desc, v_lng, v_lat, v_aux_id;
      exit when iterator%notfound;
      v_id := v_id + 1;
      update damages set id = v_id where name=v_name and risk=v_risk and description=v_desc and longitude=v_lng and latitude=v_lat;
    end loop;
  close iterator;
end;
/

update damages set id = 149 where id is null;
/

alter table damages add constraint damages_pk primary key(id);
/
