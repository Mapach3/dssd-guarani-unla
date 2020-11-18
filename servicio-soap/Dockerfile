
FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8091
ARG JAR_FILE
ADD ./target/servicio-soap-0.0.1-SNAPSHOT.jar servicio-soap.jar
ENTRYPOINT ["java","-jar","/servicio-soap.jar"]