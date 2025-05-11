const Consultation = require('./../Models/Consultation');
const axios = require('axios');

// Create a new consultation
exports.createConsultation = async (req, res, next) => {
  console.log('Reached /api/addConsult with body:', req.body);
  try {
    const roomName = `consultation-${Date.now()}`;
    const roomResponse = await axios.post(
      'https://api.daily.co/v1/rooms',
      {
        name: roomName,
        properties: {
          exp: Math.floor(Date.now() / 1000) + 3600, // expires in 1 hour
          enable_chat: true,
          start_video_off: false,
          start_audio_off: false
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const videoRoomUrl = roomResponse.data.url;

    const newConsultationData = {
      ...req.body,
      videoSessionLink: videoRoomUrl
    };

    const newConsultation = await Consultation.create(newConsultationData);

    res.status(201).json({
      success: true,
      message: 'Consultation created successfully!',
      consultation: newConsultation
    });
  } catch (error) {
    console.error('Error creating consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating consultation.',
      error: error.message
    });
  }
};

// Get all consultations
exports.getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find()
      .populate('Patient')
      .populate('Doctor')
      .exec();

    res.status(200).json({
      success: true,
      consultations
    });
  } catch (error) {
    console.error('Error fetching consultations:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve consultations.',
      error: error.message
    });
  }
};

// Get a specific consultation by ID
exports.getConsultationById = async (req, res) => {
  const { consultationId } = req.params;

  try {
    const consultation = await Consultation.findById(consultationId)
      .populate('Patient')
      .populate('Doctor')
      .exec();

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found.'
      });
    }

    res.status(200).json({
      success: true,
      consultation
    });
  } catch (error) {
    console.error('Error fetching consultation by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve consultation details.',
      error: error.message
    });
  }
};
