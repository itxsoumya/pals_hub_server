
# PALS HUB SERVER

This project is under developement


![Logo](https://raw.githubusercontent.com/itxsoumya/images/main/palshubgit.png)


## Setup on Local System


```bash
  git clone git@github.com:itxsoumya/pals_hub_server.git
  npm install
  cd pals_hub_server
```
## Run

```bash
  npm start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


## API Reference

#### Get all students

```http
  GET /students
```

#### Create a Student

```http
  POST /students/create
```

| Req body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Unique username of Student |
| `fullname`| `string`  | **Required**. Full name of Student |
| `gender` | `string` | **Required**. Gender of Student |
|  `gpa` | `number` | **Required**. GPA of Student |
| `email` | `string` | Email of Student |




## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.




## Authors

- [@itxsoumya](https://github.com/itxsoumya)


## 🔗 Links
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/itx_soumya)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/itxsoumya)


