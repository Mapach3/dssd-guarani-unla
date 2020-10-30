#build phase

#Run phase
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
ENV ASPNETCORE_URLS http://+:8090
COPY bin/Release/netcoreapp3.1/publish/ App/
WORKDIR /App
ENTRYPOINT [ "dotnet", "DDSDGuarani.dll"]
