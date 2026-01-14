export default {
  name: 'bike',
  title: 'Gestión de Bicicletas',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Modelo',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'disponible',
      title: '¿Está disponible actualmente?',
      type: 'boolean',
      initialValue: true,
      description: 'Si se marca como NO, la bicicleta aparecerá con un cartel de "No disponible" o se ocultará.',
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Standard', value: 'STANDARD' },
          { title: 'Premium', value: 'PREMIUM' },
          { title: 'Pro', value: 'PRO' },
          { title: 'Pro Doble', value: 'PRO DOBLE' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imagen',
      title: 'Foto de la Bicicleta',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar la imagen en el panel
      },
    },
    {
      name: 'diario',
      title: 'Precio Día Completo (ARS)',
      type: 'string', // Se usa string para mantener el formato "30.000"
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'medio',
      title: 'Precio Medio Día / 5hs (ARS)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'talles',
      title: 'Talles Disponibles',
      type: 'string',
      placeholder: 'Ej: S, M, L',
    },
    {
      name: 'rodado',
      title: 'Rodado',
      type: 'number',
      options: {
        list: [26, 27.5, 29],
      },
    },
    {
      name: 'transmision',
      title: 'Transmisión / Cambios',
      type: 'string',
    },
    {
      name: 'horquilla',
      title: 'Horquilla / Suspensión',
      type: 'string',
    },
    {
      name: 'frenos',
      title: 'Sistema de Frenos',
      type: 'string',
    },
    {
      name: 'uso',
      title: 'Uso Recomendado',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'categoria',
      media: 'imagen',
    },
  },
}