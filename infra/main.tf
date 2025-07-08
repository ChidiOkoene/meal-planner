terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {}

resource "docker_network" "mealapp_network" {
  name = "mealapp-net"
}

resource "docker_image" "postgres" {
  name = "postgres:15"
}

resource "docker_container" "postgres" {
  name  = "mealapp-db"
  image = docker_image.postgres.latest
  env = [
    "POSTGRES_USER=mealapp",
    "POSTGRES_PASSWORD=secret",
    "POSTGRES_DB=mealapp"
  ]
  ports {
    internal = 5432
    external = 5432
  }
  networks_advanced {
    name = docker_network.mealapp_network.name
  }
}