EXEC InsertCountry_sp 'Dubai', 'IN', 'Admin';


EXEC DeleteCountry_sp 3, 'Admin'; 

EXEC UpdateCountry_sp  1, 'Paris', 'PR', 1, 'HR';

EXEC GetCountryById_sp 3;
select * from Country_;