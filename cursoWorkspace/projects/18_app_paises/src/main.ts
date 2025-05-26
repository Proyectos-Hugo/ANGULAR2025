//configuración swagger
  const config = new DocumentBuilder()
    .setTitle('API de de paises')
    .setDescription('Documentación del API de paises')
    .setVersion('1.0')
    .addTag('paises')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('ayuda/api', app, document);
