# netflix-explorer

netflix-explorer is a web server to explore dataset of netflix
- Explore movies and tv-shows of netflix
- Filter your query to get most appropriate result

## 📋 Description 
Dataset
  -
- Netflix Movies and TV Shows (https://www.kaggle.com/datasets/shivamb/netflix-shows)

Backend
  -
- Express
  - writing apis (REST) & routes
- Mongoose
  - defining schema
  - connection to MongoDB
- winston
  - logging support
- config
  - storing configuration files, environment variables

Database
  -
- MongoDB Collections (netflix)
      - Database (list)
        - show_id: string;
        - type: string;
        - title: string;
        - director: string;
        - cast: string;
        - country: string;
        - date_added: Date;
        - release_year: number;
        - rating: string;
        - duration: string;
        - listed_in: string;
        - description: string; 
      

APIs
  -
- List API
  - 
  - <b>Method</b>: GET 
  - <b>URL</b>: https://netflix-explorer.onrender.com/api/list
  - (with query parameters)
  - ?type=:type&search=:search&rating=:rating&from=:from&to=:to&sort=:sort&order=:order
  - <b>Description</b>: Get a list of movies & tv-shows
  - <b>Request Parameters</b>:
    - type: filter by type Movie or TV Show
    - search: search keyword in fields name, cast, director
    - rating: filter by rating of movies
    - from: filter movies having release_date greater or equal to from
    - to: filter movies having release_date lesser or equal to from
    - sort: sort based on fields release_date, date_added
    - order: order of sort asc, desc
  - </b>Responses</b>
    - Status: 200 Created Body: {response.json}
    - Status: 500 Created Body: {message: "Server Error"}
- Seed 
  -
  - <b>Method</b>: POST 
  - <b>URL</b>: https://netflix-explorer.onrender.com/api/seed/
  - <b>Description</b>: Seed data based on netflix_titles.csv if not already present
  - </b>Responses</b>
    - Status: 201 Created Body: {response.json}
    - Status: 400 Created Body: {message: "Data already seeded"}
    - Status: 500 Created Body: {message: "Server Error"}
- Reset
  -
  - <b>Method</b>: DELETE
  - <b>URL</b>: https://netflix-explorer.onrender.com/api/reset/
  - <b>Description</b>: Reset the data 
  - </b>Responses</b>
    - Status: 200 Created Body: {message: "Data reset successfully"}
    - Status: 400 Created Body: {message: "No Data"}
    - Status: 500 Created Body: {message: "Server Error"}

For more info on API and responses, visit (https://github.com/amritesh19/netflix-explorer/blob/main/netflix-explorer.postman_collection.json). Examples are also provided there.

- Future Improvements
  - Joi, can be used to validate objects, since we don't have to add movies to list I haven't used it now.
  - Pagination in API
  - Auth, JWT
 
## 💻 Tech Used

### Programming Languages
<img height="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png">  &nbsp;&nbsp;

### Backend Development
<img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png">&nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png">&nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png">&nbsp;&nbsp;

### Database
<img height="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png">&nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/73696688/218967070-80af87b7-8278-4748-9ab3-4de937fe9963.png">&nbsp;&nbsp;

### API Testing
<img height="50" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png">&nbsp;&nbsp;

### Deployment
<img height="50" src="https://user-images.githubusercontent.com/73696688/218966338-ae02f90e-6fde-4755-b6bc-54b83bae428a.png">&nbsp;&nbsp;
