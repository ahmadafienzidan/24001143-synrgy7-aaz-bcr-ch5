# Express TS Starter

Simple express TS starter!

## How to use?

```
$ npm install
$ npm run dev # run development!
```

## Scripts

```
$ npm run build # build typescript project
$ npm start # run in development mode
```

## Database

```
$ docker compose up -d # run database
$ docker compose down -v # delete database and the volume
```

## ERD by DB DIAGRAM

https://dbdiagram.io/d/ERD-Challenge_5-66458f83f84ecd1d224f918c

## END POINT

````
getCars -> GET localhost:3000/cars/
getCarsByID -> GET localhost:3000/cars/:id
addCars -> POST localhost:3000/cars/
updateCars -> PUT localhost:3000/cars/:id
deleteCars -> DELETE localhost:3000/cars/:id
```
```
addUsers -> POST localhost:3000/auth/signup
getAllUsersData => GET localhost:3000/auth/admin
usersLogin -> POST localhost:3000/auth/login
usersLogout -> POST localhost:3000/auth/logout
```

```
orderCar POST http://localhost:3000/orders
updateOrder -> PUT http://localhost:3000/orders/:id
```

````
