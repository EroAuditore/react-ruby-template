# Blog-app API End-Points RoR

In this project, we transformed the original Blog app into an back-end server, providing it with some API endpoints to a to allow it to be used in different ways, rather than just through the site - for example, a mobile app or a CLI application.

## Built With

- Ruby v2.7.0
- Ruby on Rails v5.2.6

## Live Demo

TBA

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Ruby: 2.7.0
- Rails: 5.2.6
- Postgres: >=9.5

### Setup

To run this project, you only need a computer with internet connection and a browser installed, and follow these steps:

In your terminal, in the folder of your preference, type the following bash command to clone this repository:

```sh
git clone https://github.com/EroAuditore/react-ruby-template.git
```

then

```sh
cd react-ruby-template
```

Install gems with:

```
bundle install
```

Setup database with:

```
   rails db:create
   rails db:migrate
```

Install figaro to set Env variables
Figaro installation is easy:

```
$ bundle exec figaro install
```

This creates a commented config/application.yml file and adds it to your .gitignore. Add your own configuration to this file and you're done!

Given the following configuration file you'll have to add this variables and write your own password and user to connect to DB:

# config/application.yml

> #Dev <br>
> psql_uid: postgres_user <br>
> psql_pwd: Mypsqlpassword <br>
> #prod <br>
>
> prod_psql_uid: postgres_user<br>
> prod_psql_pwd: Mypsqlpassword<br>

Optionally, you can add the provided seeds for the database tables with:

```
    rails db:seed
```

### Usage

Start server with:

```
    rails server
```

API
Open the rest API client of your choice (we recommend using Thunder client VScode extension)

### API endpoints

| Name      | Endpoint            | Method | Header | Body | description              |
| --------- | ------------------- | ------ | ------ | ---- | ------------------------ |
| hello     | `/api/v1/hello`     | GET    |        |      | return a radom greeting  |
| greetings | `/api/v1/greetings` | GET    |        |      | return all the greetings |

## Authors

👨‍💻 **Eduardo Rodriguez**

- GitHub: [@EroAuditore](https://github.com/EroAuditore)
- Twitter: [@EroAuditore](https://twitter.com/EroAuditore)
- LinkedIn: [EroAuditore](https://www.linkedin.com/in/EroAuditore/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to comments and raise any [issue](https://github.com/EroAuditore/blog-api/issues) for this milestone.

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://www.microverse.org/)
- [The Odin Project](https://www.theodinproject.com/)
- [Rails Guides](https://guides.rubyonrails.org/index.html)

## 📝 License

This project is [MIT](./LICENSE) licensed.
