FROM public.ecr.aws/lambda/nodejs:20

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

COPY --chown=node:node . .
RUN npm install

ENV ATLAS_URI "mongodb+srv://gamedevutopia:webuiltthisinJan24@cluster0.ouco37c.mongodb.net/gdu"
ENV JWT_SECRET "GDU_backend"
ENV PORT "8080"

EXPOSE 8080

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "lambda.handler" ]