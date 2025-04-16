DROP PROCEDURE GetCountryById_SP;
GO
create procedure GetCountryById_SP

@CountryId int

As
Begin
	set NOCount ON;
	Select * from Country_
	where CountryId = @CountryId;
End