build:
	docker build -t my-mern-app .

run:
	docker run -p 5000:5000 -p 3000:3000 my-mern-app


