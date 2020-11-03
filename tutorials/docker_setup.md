# Docker Setup

*This is just a reminder for me, but anyone else who wants to use it can, no attribution required.*

## Installing Docker on a Mac

The easiest way to install almost anything on Mac is using Homebrew. Homebrew is a package manager (pm) for Mac, similar to the aptitude pm for Ubuntu. It will manage all of the installation and linking for you. To get it, just run the folloing line of code:

```bash
$ /bin/bash -c "$(curl -fsSL ``https://raw.githubusercontent.com/Homebrew/install/master/install.sh``)"
```

One you have Homebrew, use this command to install docker.

```bash
$ brew cask install docker
```

> This isn't important right now, but there are multiple methods of installing packages using Homebrew. The standard way is just using `brew install`, which is for command line interface (cli) applications. The way that we're using, `brew cas install` is meant for packages that have a graphical user interface (gui). Docker does use a command-line interface, but the gui version includes the cli version and also happens to have the latest version, so we're going with that one.

If you try to run docker now, it's not going to work. You have to start docker first by starting the application.

```bash
$ open /Applications/Docker.app
```

Docker should be all set up now.

## File Structure

We don't want to have to rebuild our docker image every time we change code, so we're going to add our code as a **bind mount**. Think of this as mounting a directory to our docker image as if it were an external file tree. To maintain proper seperation of concerns, we should implement the following direcvtory structure

```bash
.
├── Dockerfile
├── <any_static_files>
└── src
    └── <dynamic_code_here>
```

>  It doesn't matter where the root directory is located.

## Dockerfile

Once you've created the file structure, you're going to want to edit the `Dockerfile`. This is just an example from a toy (meaing test) python project I was working on:

```dockerfile
# import the base image
FROM python:3.8

# Set the working directory in the container
# This will be the root directory of your 
WORKDIR /app

# copy the dependencies file to the working directory
COPY requirements.txt .

# install dependencies
RUN pip install -r requirements.txt

# command to run on container start
CMD [ "python", "/app/src/python_test.py" ]
```



## Running Docker

To build our image, we're going to use the following line:

```bash
$ docker build -t <image_name> . 
```

> Note that the image name should be all caps



We then need to mount our code directory. The following line will mount our "external file system" and run docker:

```bash
$ docker run -it -v "$(pwd)/src:/app/src" <image_name>
```



## Cleaning Up

The only annoying thing about docker is that it can make a mess if you're not careful. Whenever you want to rebuild the image, you need to run the following line to make sure that everything is properly removed. I got tired of typing out the commands every single time, so I wrote a makefile to handle it:

```makefile
IMAGE_NAME = myimage
SOURCE_DIR = $(shell pwd)/src
TARGET_DIR = /app/src

rebuild: clean build
	
run:
	docker run -it --rm -v "${SOURCE_DIR}:${TARGET_DIR}" ${IMAGE_NAME}

debug:
	@echo "Saving container. Make sure to delete later!"
	docker run -it -v "${SOURCE_DIR}:${TARGET_DIR}" ${IMAGE_NAME}

clean:
	@echo "Removing old image"
	docker system prune -f
	docker rmi ${IMAGE_NAME}

build:
	@echo "Building new image"
	docker build -t ${IMAGE_NAME} .

build_nc:
	@echo "Building new image without cache"
	docker build --no-cache -t ${IMAGE_NAME} .

all: rebuild run
```

> Some people think Makefiles are gross, but I like mine :)