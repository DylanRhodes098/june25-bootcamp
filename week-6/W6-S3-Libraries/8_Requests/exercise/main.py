def main():
    while True:
        country_name = input("Enter a country name: ").strip()
        if country_name:
            url = f"https://restcountries.com/v3.1/name/{country_name}"
            
            import requests

            # Fetch country details from the REST Countries API
            res = requests.get(f"https://restcountries.com/v3.1/name/{country_name}") 
            print(res.status_code)
            data = res.json()
            country = data[0]

            # Check if the response status code is 200
            population = country["population"]
            print(population)

            # If the response status code is 200, get the first matching country result


            # Get the common name and population of the country

            # Print the country name and population
           
            # If the response status code is not 200, print an error message

            break
        else:
            print("Invalid input. Please enter a valid country name.")


if __name__ == "__main__":
    main()
