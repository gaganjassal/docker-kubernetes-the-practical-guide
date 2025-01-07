FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /app
COPY . .
RUN dotnet publish -c Release -o /publish
EXPOSE 8080
WORKDIR /publish
CMD [ "dotnet", "MVCCore.dll" ]
