const API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const API_KEY = 'AIzaSyB54HB3PMBTSzn6RArQ1xiWPwAyaOTz0DM'; // Ensure this is your actual API key

// Navigation between steps
const steps = document.querySelectorAll('.builder-step');
let currentStep = 0;

function showStep(step) {
  steps.forEach((stepDiv, index) => {
    stepDiv.classList.toggle('active', index === step);
  });
}

document.querySelectorAll('.next-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

document.querySelectorAll('.prev-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

// Adding skills dynamically
const skillsInput = document.getElementById('skills-input');
const addSkillBtn = document.getElementById('add-skill-btn');
const skillsList = document.getElementById('skills-list');

addSkillBtn.addEventListener('click', () => {
  const skill = skillsInput.value.trim();
  if (skill) {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
    skillsInput.value = '';
  }
});

// Fetch content suggestions from API
async function fetchContentSuggestions(jobTitle, industry) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Provide personalized resume content for job title: ${jobTitle} in industry: ${industry}.`,
        max_tokens: 200,
      }),
    });

    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const data = await response.json();
    displayContentSuggestions(data.choices[0].text);
  } catch (error) {
    console.error('Error fetching content suggestions:', error);
    alert('Failed to fetch content suggestions. Please try again later.');
  }
}

function displayContentSuggestions(suggestions) {
  const suggestionsContainer = document.createElement('div');
  suggestionsContainer.classList.add('suggestions-container');
  suggestionsContainer.innerHTML = `<p>💡 Suggestions: ${suggestions}</p>`;
  const step2 = document.getElementById('step2');
  step2.appendChild(suggestionsContainer);
}

// Analyze resume with API
async function analyzeResume(data) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Analyze the resume for: ${data.fullName}, Job Title: ${data.jobTitle}, Industry: ${data.industry}, Skills: ${data.skills.join(', ')}.`,
        max_tokens: 300,
      }),
    });

    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const analysisResults = await response.json();
    displayResumeAnalysis(analysisResults.choices[0].text);
  } catch (error) {
    console.error('Error analyzing resume:', error);
    alert('Failed to analyze resume. Please try again later.');
  }
}

function displayResumeAnalysis(analysisText) {
  const analysisContainer = document.createElement('div');
  analysisContainer.classList.add('analysis-container');
  analysisContainer.innerHTML = `<p>🔍 Feedback: ${analysisText}</p>`;
  const step4 = document.getElementById('step4');
  step4.appendChild(analysisContainer);
}

document.getElementById('user-info-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const jobTitle = document.getElementById('job-title').value;
  const industry = document.getElementById('industry').value;
  if (jobTitle && industry) {
    fetchContentSuggestions(jobTitle, industry);
  } else {
    alert('Please fill out all fields before proceeding.');
  }
});

document.getElementById('generate-resume-btn').addEventListener('click', () => {
  const fullName = document.getElementById('full-name').value;
  const jobTitle = document.getElementById('job-title').value;
  const industry = document.getElementById('industry').value;
  const skills = Array.from(document.querySelectorAll('#skills-list li')).map(li => li.textContent);

  const resumeData = { fullName, jobTitle, industry, skills };
  analyzeResume(resumeData);
});
