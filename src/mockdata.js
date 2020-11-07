export const Complaints = [
  {
    name: 'Subhajit Nandi',
    im_url: 'https://picsum.photos/200',
    age: 21,
    gender: 'male',
    skin: 'wheatish',
    guardian: {
      name: 'Uncle',
      contact: '1234567890'
    },
    missingTime: '10:30 am',
    lastSeen: 'Raja Park'
  },
  {
    name: 'Mohit Jindal',
    im_url: 'https://picsum.photos/200',
    age: 21,
    gender: 'male',
    skin: 'wheatish',
    guardian: {
      name: 'Uncle',
      contact: '1234567890'
    },
    missingTime: '10:30 am',
    lastSeen: 'Raja Park'
  },
  {
    name: 'Sourabh Tripathi',
    im_url: 'https://picsum.photos/200',
    age: 21,
    gender: 'male',
    skin: 'wheatish',
    guardian: {
      name: 'Uncle',
      contact: '1234567890'
    },
    missingTime: '10:30 am',
    lastSeen: 'Raja Park'
  }
];

export const Matches = [
  {
    name: 'Subhajit Nandi',
    im_url: 'https://picsum.photos/200',
    age: '21',
    gender: 'male',
    skin: 'Wheatish',
    guardian: {
      name: 'Uncle',
      contact: '1234567890'
    },
    missingTime: '10:30 am',
    lastSeen: 'Raja Park',
    matchingProfiles: [
      {
        im_url: 'https://picsum.photos/200',
        confidence: '60%'
      },
      {
        im_url: 'https://picsum.photos/200',
        location: 'MGD', //TODO : Longitude and Latitude later
        accuracy: '62%'
      },
      {
        im_url: 'https://picsum.photos/200',
        location: 'Raja Chowk', //TODO : Longitude and Latitude later
        accuracy: '80%'
      },
      {
        im_url: 'https://picsum.photos/200',
        location: 'Kamal Park', //TODO : Longitude and Latitude later
        accuracy: '65%'
      },
      {
        im_url: 'https://picsum.photos/200',
        location: 'Chawri Baazar', //TODO : Longitude and Latitude later
        accuracy: '70%'
      },
      {
        im_url: 'https://picsum.photos/200',
        location: 'Polo Victory', //TODO : Longitude and Latitude later
        accuracy: '67%'
      }
    ]
  }
];
