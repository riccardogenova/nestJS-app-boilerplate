echo Welcome to NestJs-boilerplate configuration.
echo Which Database you want to use?:
select opt in "MongoDB" "Postgres"; do
      case $opt in
        "MongoDB")
            rm -rf ./src/common/prisma-postgres
            & mv ./src/common/prisma-mongodb ./src/common/prisma 
            & rm ./docker-compose-postgres.yml
            & mv ./docker-compose-mongodb.yml ./docker-compose.yml
            && yarn
            && rm ./config.sh
            break
            ;;
        "Postgres")
            rm -rf ./src/common/prisma-mongodb 
            & mv ./src/common/prisma-postgres ./src/common/prisma
            & rm ./docker-compose-mongodb.yml
            & mv ./docker-compose-postgres.yml ./docker-compose.yml
            && yarn && yarn remove mongoose mongodb @nestjs/mongoose
            && rm ./config.sh
            break
            ;;
        *) echo "Invalid option";;
    esac
done