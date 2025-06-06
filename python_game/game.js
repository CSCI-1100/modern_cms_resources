// Game state
let gameState = {
    playerName: '',
    playerRole: '',
    currentLevel: 0,
    progress: 0
};

// Enhanced scenarios with crisis themes and final challenges
const roleScenarios = {
        'professor-scatterbrain': {
        title: 'Professor',
        character: 'Professor Scatterbrain',
        crisis: 'Student rosters scrambled across classes!',
        scenarios: [
            'Professor Scatterbrain, your office is chaos! Student rosters are mixed up across all your classes, and you need to sort them out before tomorrow\'s lectures.',
            'First, you need to understand how to store and organize different types of student data systematically.',
            'Create an interactive system to input student information and automatically categorize it by class.',
            'Use lists to manage your multiple class rosters and keep track of student enrollment.',
            'Implement automated decision-making to determine which students belong in which classes.',
            'Build the complete roster management system to save your academic career!'
        ],
        finalChallenge: {
            title: 'Crisis Resolution: Untangle the Class Rosters!',
            description: 'All your student data is jumbled together! Create an algorithm to separate students into their correct class rosters.',
            
            shit: `CS101 - Computer Science:
1. Kai - Grade: 95
2. Alex - Grade: 92

MATH200 - Calculus:
1. Zara - Grade: 87

PHYS150 - Physics:
(No students)

CS101 Average: 93.5
MATH200 Average: 87.0

Total students in CS101: 2

✅ Crisis resolved! All 3 students organized!`,
            
            artifact: {
                title: '📚 Professor Scatterbrain\'s Organized Class Rosters',
                content: `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div class="roster-list">
                        <div class="roster-header">🎓 CS101 - Computer Science (4 students)</div>
                        <div class="student-entry">1. Kai - Grade: 95</div>
                        <div class="student-entry">2. Alex - Grade: 92</div>
                    </div>
                    <div class="roster-list">
                        <div class="roster-header">🧮 MATH200 - Calculus (3 students)</div>
                        <div class="student-entry">1. Zara - Grade: 87</div>
                    </div> 
                    <div class="roster-list">
                        <div class="roster-header">⚗️ PHYS150 - Physics (2 students)</div>
                        <div class="student-entry">(No Students)</div>
                    </div>
                   <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        ✅ Crisis resolved! All 3 students organized into their correct classes!
                    </div>
                </div>`
            }
        }
    },

    'admin-alice': {
        title: 'Administrator',
        character: 'Administrator Alice',
        crisis: 'Enrollment system crashed during registration!',
        scenarios: [
            // same
        ],
        finalChallenge: {
            title: 'Crisis Resolution: Process the Application Backlog!',
            description: 'The enrollment system crash left hundreds of applications in limbo. Create an automated processing system to handle them all!',
            artifact: {
                title: '📋 Administrator Alice\'s Application Processing Report',
                content: `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div class="roster-list">
                        <div class="roster-header">✅ APPROVED STUDENTS (3)</div>
                        <div class="student-entry">Jordan Kim (GPA: 3.8, SAT: 1420)</div>
                    </div>

                    <div class="roster-list">
                        <div class="roster-header">❌ REJECTED STUDENTS (1)</div>
                        <div class="student-entry">Taylor Singh (GPA: 2.7, SAT: 1000)</div>
                    </div>

                    <div class="roster-list">
                        <div class="roster-header">⏳ MANUAL REVIEW REQUIRED (3)</div>
                        <div class="student-entry">Alex Chen (GPA: 3.6, SAT: 1350) - Missing essays</div>
                    </div>

                    <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <h4>📊 Processing Summary</h4>
                        <p><strong>Total Applications:</strong> 7</p>
                        <p><strong>Auto-approved:</strong> 3 (42.9%)</p>
                        <p><strong>Auto-rejected:</strong> 1 (14.3%)</p>
                        <p><strong>Manual review:</strong> 3 (42.9%)</p>
                        <p style="color: #4CAF50; font-weight: bold; margin-top: 10px;">🎉 Enrollment crisis averted!</p>
                    </div>
                </div>`
            }
        }
    },

    'researcher-ray': {
        title: 'Researcher',
        character: 'Researcher Ray',
        crisis: 'Lab data from multiple experiments mixed up!',
        scenarios: [
            // same
        ],
        finalChallenge: {
            title: 'Crisis Resolution: Separate the Experimental Data!',
            description: 'Your research data is completely scrambled! Create a system to identify and separate data by experiment type.',
            artifact: {
                title: '🔬 Researcher Ray\'s Data Recovery Report',
                content: `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div class="roster-list">
                        <div class="roster-header">🌡️ Temperature Experiment Results (2 subjects)</div>
                        <div class="student-entry">Subject A1: 23.5°F at 09:00 - Abnormal ❄️</div>
                        <div class="student-entry">Subject A2: 98.6°F at 09:30 - Normal ✅</div>
                        <div class="student-entry">Subject A3: 37.2°F at 10:00 - Abnormal ❄️</div>
                        <div class="student-entry">Subject A4: 41.8°F at 10:30 - Abnormal ❄️</div>
                    </div>

                    <div class="roster-list">
                        <div class="roster-header">🩺 Pressure Experiment Results (2 subjects)</div>
                        <div class="student-entry">Subject B2: 145 mmHg at 09:15 - Normal ✅</div>
                        <div class="student-entry">Subject B1: 167 mmHg at 09:45 - Abnormal ⚠️</div>
                        <div class="student-entry">Subject B3: 134 mmHg at 10:15 - Normal ✅</div>
                        <div class="student-entry">Subject B4: 156 mmHg at 10:45 - Normal ✅</div>
                    </div>

                    <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <h4>📊 Research Summary</h4>
                        <p><strong>Total Readings Recovered:</strong> 8</p>
                        <p><strong>Temperature Avg:</strong> 50.3°F</p>
                        <p><strong>Pressure Avg:</strong> 150.5 mmHg</p>
                        <p style="color: #4CAF50; font-weight: bold; margin-top: 10px;">🎉 All research data successfully organized!</p>
                    </div>
                </div>`
            }
        }
    },

    'it-hero': {
        title: 'IT Specialist',
        character: 'IT Hero',
        crisis: 'User accounts and permissions chaos!',
        scenarios: [
            // same
        ],
        finalChallenge: {
            title: 'Crisis Resolution: Fix the User Management Chaos!',
            description: 'User accounts are scattered and permissions are wrong! Create an automated system to organize users and assign correct access levels.',
            artifact: {
                title: '💻 IT Hero\'s User Management Report',
                content: `
                 <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div class="roster-list">
                        <div class="roster-header">👨‍🏫 PROFESSORS (3 accounts)</div>
                        <div class="student-entry">john.doe (Computer Science) - Full academic access</div>
                        <div class="student-entry">alice.brown (Mathematics) - Full academic access</div>
                        <div class="student-entry">frank.taylor (Biology) - Full academic access</div>
                    </div>

                    <div class="roster-list">
                        <div class="roster-header">👨‍🎓 STUDENTS (2 accounts)</div>
                        <div class="student-entry">charlie.davis (Computer Science) - Student access</div>
                        <div class="student-entry">eve.martinez (Mathematics) - Student access</div>
                    </div>

                    <div class="roster-list">
                        <div class="roster-header">👨‍💼 STAFF (3 accounts)</div>
                        <div class="student-entry">bob.wilson (IT Department) - Administrative access</div>
                        <div class="student-entry">diana.lee (Registrar) - Administrative access</div>
                        <div class="student-entry">grace.wong (Library) - Administrative access</div>
                    </div>

                    <div class="roster-list">
                        <div class="roster-header">⚠️ SUSPENDED ACCOUNTS (1)</div>
                        <div class="student-entry">jane.smith (Biology) - Requires review</div>
                    </div>

                    <div style="background: #f3e5f5; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <h4>🔐 Security Summary</h4>
                        <p><strong>Total Accounts:</strong> 9</p>
                        <p><strong>Active Accounts:</strong> 8</p>
                        <p><strong>Suspended:</strong> 1</p>
                        <p style="color: #4CAF50; font-weight: bold; margin-top: 10px;">🎉 IT crisis resolved!</p>
                    </div>
                </div>`
            }
        }
    }
};

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
    setupCharacterCreation();
});

function setupCharacterCreation() {
    const roleCards = document.querySelectorAll('.role-card');
    const nameInput = document.getElementById('nameInput');
    const startButton = document.getElementById('startAdventure');
    
    roleCards.forEach(card => {
        card.addEventListener('click', function() {
            roleCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            gameState.playerRole = this.dataset.role;
            checkStartReady();
        });
    });

    nameInput.addEventListener('input', function() {
        gameState.playerName = this.value.trim();
        checkStartReady();
    });

    function checkStartReady() {
        if (gameState.playerName && gameState.playerRole) {
            startButton.classList.remove('hidden');
        }
    }

    startButton.addEventListener('click', startGame);
}

function startGame() {
    document.getElementById('characterCreation').classList.add('hidden');
    document.getElementById('playerInfo').classList.remove('hidden');
    
    const scenario = roleScenarios[gameState.playerRole];
    const displayName = gameState.playerName;
    
    document.getElementById('playerName').textContent = displayName;
    document.getElementById('playerRole').textContent = scenario.character;
    
    showLevel(1);
}

function showLevel(levelNum) {
    // Hide all levels
    for (let i = 1; i <= 6; i++) {
        const level = document.getElementById(`level${i}`);
        if (level) level.classList.add('hidden');
    }
    
    // Show current level
    const currentLevel = document.getElementById(`level${levelNum}`);
    if (currentLevel) {
        currentLevel.classList.remove('hidden');
        gameState.currentLevel = levelNum;
        updateProgress();
        updateLevelDisplay();
        
        // Load scenario-specific content for final level
        if (levelNum === 6) {
            loadFinalChallenge();
        } else {
            updateScenarioText(levelNum);
        }
    }
}

function updateScenarioText(levelNum) {
    const scenarios = roleScenarios[gameState.playerRole].scenarios;
    const scenarioElement = document.getElementById(`level${levelNum}Scenario`) || document.getElementById('scenarioText');
    if (scenarioElement && scenarios[levelNum - 1]) {
        scenarioElement.textContent = scenarios[levelNum - 1];
    }
}

// Replace the existing loadFinalChallenge function with this:
function loadFinalChallenge() {
    // Use the new interactive challenge system
    loadInteractiveFinalChallenge();
    
    // Hide the default completion button until challenge is done
    document.getElementById('completeLevel6').style.display = 'none';
}

function updateProgress() {
    const progress = (gameState.currentLevel / 6) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function updateLevelDisplay() {
    const levelNames = [
        'Character Creation',
        'Introduction to Python',
        'Data Types and Operations', 
        'Input and Output',
        'Lists and Collections',
        'Decision Making',
        'Final Challenge'
    ];
    document.getElementById('levelDisplay').textContent = `Level ${gameState.currentLevel}: ${levelNames[gameState.currentLevel]}`;
}

// Also update the completeLevel function to handle the final challenge properly:
function completeLevel(levelNum) {
    if (levelNum < 6) {
        showLevel(levelNum + 1);
    } else {
        // For level 6, check if interactive challenge is complete
        const completedSteps = document.querySelectorAll('.check-step:disabled').length;
        const totalSteps = window.currentChallenge ? window.currentChallenge.steps.length : 0;
        
        if (completedSteps === totalSteps) {
            showCompletion();
        } else {
            // Show message that they need to complete the challenge first
            const feedback = document.createElement('div');
            feedback.className = 'feedback incorrect';
            feedback.innerHTML = '<p>Please complete all the coding challenges above before proceeding!</p>';
            document.querySelector('#level6 .btn').parentNode.insertBefore(feedback, document.querySelector('#level6 .btn'));
            setTimeout(() => feedback.remove(), 3000);
        }
    }
}

function showCompletion() {
    document.getElementById('level6').classList.add('hidden');
    document.getElementById('completion').classList.remove('hidden');
    
    const scenario = roleScenarios[gameState.playerRole];
    const challenge = scenario.finalChallenge;
    
    // Create enhanced completion content with full solution AND certificate button
    const completionContent = document.getElementById('completionContent');
    completionContent.innerHTML = `
        <div class="level-complete">
            <h2>🎉 Crisis Resolved! You Saved the Day! 🎉</h2>
            <h3>Congratulations ${gameState.playerName}!</h3>
            <p>You've successfully saved the day with your Python programming and computational thinking skills!</p>
        </div>
        
        <div class="solution-artifact">
            <h3>${challenge.artifact.title}</h3>
            ${challenge.artifact.content}
        </div>

        <div class="solution-display">
            <div class="solution-code">
                <h4>📝 Complete Solution Code</h4>
                <pre><code class="language-python">${generateFullSolutionCode(gameState.playerRole)}</code></pre>
            </div>
            <div class="solution-output">
                <h4>🖥️ Program Output</h4>
                <pre>${generateSolutionOutput(gameState.playerRole)}</pre>
            </div>
        </div>
        
        <div class="level-complete">
            <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color:black!important;">🛠️ Skills You've Mastered:</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; text-align: left; margin: 20px 0; color:black!important;">
                    <div>
                        <ul style="margin: 0; padding-left: 20px; list-style-type: none;">
                            <li>✅ Variables and Data Types</li>
                            <li>✅ String Methods (split, indexing)</li>
                            <li>✅ List Creation and Management</li>
                            <li>✅ List Methods (append, len)</li>
                        </ul>
                    </div>
                    <div>
                        <ul style="margin: 0; padding-left: 20px; list-style-type: none;">
                            <li>✅ For Loops and Iteration</li>
                            <li>✅ Conditional Logic (if/elif/else)</li>
                            <li>✅ Boolean Operators (and, or)</li>
                            <li>✅ Print Formatting and F-strings</li>
                        </ul>
                    </div>
                    <div>
                        <ul style="margin: 0; padding-left: 20px; list-style-type: none;">
                            <li>✅ Mathematical Operations</li>
                            <li>✅ Built-in Functions (sum, max, min)</li>
                            <li>✅ Computational Thinking</li>
                            <li>✅ Real-world Problem Solving</li>
                        </ul>
                    </div>
                </div>
                <p style="color: #4CAF50; font-weight: bold; margin-top: 20px; text-align: center; font-size: 1.1em;">
                    🎓 You're now ready to tackle real-world programming challenges!
                </p>
            </div>
        </div>

        <div class="completion-actions" style="text-align: center; margin-top: 30px;">
            <button class="btn" onclick="printCertificate()">🏆 Get Your Certificate</button>
            <button class="btn btn-secondary" onclick="resetGame()">Start New Adventure</button>
        </div>
    `;
    
    updateProgress();
    document.getElementById('levelDisplay').textContent = 'Quest Complete!';
    window.scrollTo(0, 0);
}

function resetGame() {
    gameState = { playerName: '', playerRole: '', currentLevel: 0, progress: 0 };
    document.getElementById('completion').classList.add('hidden');
    document.getElementById('playerInfo').classList.add('hidden');
    document.getElementById('characterCreation').classList.remove('hidden');
    document.getElementById('nameInput').value = '';
    document.querySelectorAll('.role-card').forEach(card => card.classList.remove('selected'));
    document.getElementById('startAdventure').classList.add('hidden');
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('levelDisplay').textContent = 'Level 1: Character Creation';

    questionInputs = document.getElementsByClassName('question-input');
    for (const input of questionInputs) { input.value = '' }
}

// Interactive challenges
function checkVariableChallenge() {
    const input = document.getElementById('variable-challenge').value.trim();
    const feedback = document.getElementById('variable-feedback');
    
    if (input.toLowerCase().includes('python') && input.includes('=')) {
        feedback.innerHTML = '<div class="feedback correct">🎉 Correct! You created a variable that stores "Python"!</div>';
    } else {
        feedback.innerHTML = '<div class="feedback incorrect">❌ Try again! Remember: variable_name = "Python"</div>';
    }
}

function checkFstringChallenge() {
    const input = document.getElementById('fstring-challenge').value.trim();
    const feedback = document.getElementById('fstring-feedback');
    
    if (input.includes('{') && input.includes('}') && input.includes('name')) {
        feedback.innerHTML = '<div class="feedback correct">🎉 Correct! F-strings use {variable_name} to include variables!</div>';
    } else {
        feedback.innerHTML = '<div class="feedback incorrect">❌ Try again! Use {name} to include the variable in the f-string.</div>';
    }
}

function checkListChallenge() {
    const input = document.getElementById('list-challenge').value.trim();
    const feedback = document.getElementById('list-feedback');
    
    if (input.includes('[') && input.includes(']') && input.includes('"')) {
        feedback.innerHTML = '<div class="feedback correct">🎉 Correct! You created a list with string items!</div>';
    } else {
        feedback.innerHTML = '<div class="feedback incorrect">❌ Try again! Use format: subjects = ["item1", "item2", "item3"]</div>';
    }
}

function checkIfChallenge() {
    const input = document.getElementById('if-challenge').value.trim();
    const feedback = document.getElementById('if-feedback');
    
    if (input.includes('>=') || input.includes('> =')) {
        feedback.innerHTML = '<div class="feedback correct">🎉 Correct! The >= operator checks if score is greater than or equal to 70!</div>';
    } else {
        feedback.innerHTML = '<div class="feedback incorrect">❌ Try again! Use >= to check if score is greater than or equal to 70.</div>';
    }
}

function checkFunctionChallenge() {
    const input = document.getElementById('function-challenge').value.trim();
    const feedback = document.getElementById('function-feedback');
    
    if (input.toLowerCase().includes('len') && input.includes('(') && input.includes(')')) {
        feedback.innerHTML = '<div class="feedback correct">🎉 Correct! len() counts the number of items in a list!</div>';
    } else {
        feedback.innerHTML = '<div class="feedback incorrect">❌ Try again! What function counts items in a list?</div>';
    }
}

// Multiple choice handling
function selectChoice(element, questionId) {
    const choices = document.querySelectorAll(`[onclick*="${questionId}"]`);
    choices.forEach(choice => choice.classList.remove('selected'));
    element.classList.add('selected');
}

function checkMultipleChoice(questionId) {
    const selected = document.querySelector(`[onclick*="${questionId}"].selected`);
    const feedback = document.getElementById(`${questionId}-feedback`);
    
    if (!selected) {
        feedback.innerHTML = '<div class="feedback incorrect">❌ Please select an answer first!</div>';
        return;
    }
    
    if (selected.dataset.answer === 'correct') {
        feedback.innerHTML = '<div class="feedback correct">🎉 Correct! Well done!</div>';
    } else {
        feedback.innerHTML = '<div class="feedback incorrect">❌ That\'s not quite right. Try again!</div>';
    }
}

// Copy code functionality
function copyCode(button) {
    const codeBlock = button.nextElementSibling.textContent;
    navigator.clipboard.writeText(codeBlock).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Enhanced final challenges with interactive fill-in-the-blanks (REVISED TO REMOVE DICTIONARIES)
const interactiveFinalChallenges = {
    'professor-scatterbrain': {
        title: 'Crisis Resolution: Untangle the Class Rosters!',
        description: 'All your student data is jumbled together! Complete the algorithm to separate students into their correct class rosters.',
        steps: [
            {
                title: 'Step 1: Set Up Your Data Structure',
                description: 'First, create the lists to hold each class roster. Use the format coursecode_roster',
                codeTemplate: `# Create empty rosters for each class
______ = []  # For CS101 students
______ = []  # For MATH200 students  
______ = []  # For PHYS150 students
print("Class rosters initialized!")`,
                blanks: [
                    { id: 'cs101_roster', correctAnswers: ['cs101_roster', 'cs101'], hint: 'Enter cs101_roster. This is the list where we will sort the CS101 students' },
                    { id: 'math200_roster', correctAnswers: ['math200_roster', 'math200'], hint: 'Enter math200_roster. This is the list where we will sort the MATH200 students' },
                    { id: 'phys150_roster', correctAnswers: ['phys150_roster', 'phys150'], hint: 'Enter phys150_roster. This is the list where we will sort the PHYS150 students' }
                ],
                explanation: 'Great! You\'ve created three empty lists to organize students by class.'
            },
            {
                title: 'Step 2: Process the Mixed Data',
                description: 'Now loop through each student record and extract the information. Complete the for loop:',
                codeTemplate: `mixed_students = ["Kai,CS101,95", "Zara,MATH200,87", "Alex,CS101,92"]

for student_record in ______:
    # Split the record into parts
    parts = student_record.______(",")
    name = parts[______]
    class_code = parts[______] 
    grade = int(parts[______])
    
    print(f"Processing: {name} in {class_code}")`,
                blanks: [
                    { id: 'mixed_students', correctAnswers: ['mixed_students'], hint: 'What is the name of the list we\'re looping through?' },
                    { id: 'split_method', correctAnswers: ['split'], hint: 'What method separates a string by commas?' },
                    { id: 'name_index', correctAnswers: ['0'], hint: 'What index is the first item in a list?' },
                    { id: 'class_index', correctAnswers: ['1'], hint: 'What index is the second item in a list?' },
                    { id: 'grade_index', correctAnswers: ['2'], hint: 'What index is the third item in a list?' }
                ],
                explanation: 'Perfect! You\'re extracting the name, class, and grade from each student record.'
            },
            {
                title: 'Step 3: Sort Students into Classes',
                description: 'Use conditional logic to put each student in the right roster. We\'ll store students as simple lists with [name, grade]:',
                codeTemplate: `# Inside the loop from Step 2...
student_info = [name, grade]  # Store as a simple list

if class_code == "______":
    cs101_roster.______(student_info)
    print(f"Added {name} to CS101")
elif class_code == "______":  
    math200_roster.______(student_info)
    print(f"Added {name} to MATH200")
elif class_code == "______":
    phys150_roster.______(student_info) 
    print(f"Added {name} to PHYS150")`,
                blanks: [
                    { id: 'cs101_check', correctAnswers: ['CS101'], hint: 'What string should we check for CS101 students?' },
                    { id: 'cs101_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' },
                    { id: 'math200_check', correctAnswers: ['MATH200'], hint: 'What string should we check for MATH200 students?' },
                    { id: 'math200_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' },
                    { id: 'phys150_check', correctAnswers: ['PHYS150'], hint: 'What string should we check for PHYS150 students?' },
                    { id: 'phys150_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' }
                ],
                explanation: 'Excellent! Now each student will be added to their correct class roster as a simple list.'
            },
            {
                title: 'Step 4: Display the Results',
                description: 'Finally, show the organized rosters. Each student is stored as [name, grade]:',
                codeTemplate: `print("\\n=== ORGANIZED CLASS ROSTERS ===")

print("\\nCS101 - Computer Science:")
i = 1
for student in cs101_roster:
    print(f"{i}. {student[______]} - Grade: {student[______]}")
    i += 1

print("\\nTotal students in CS101:", ______(cs101_roster))

# Calculate average grade
grades = [s[1] for s in cs101_roster]  # Get all grades (index 1)
if grades:
    avg = ______(grades) / ______(grades)
    print(f"Average grade: {avg:.1f}")`,
                blanks: [
                    { id: 'name_index', correctAnswers: ['0'], hint: 'What index holds the student\'s name in the list [name, grade]?' },
                    { id: 'grade_index', correctAnswers: ['1'], hint: 'What index holds the student\'s grade in the list [name, grade]?' },
                    { id: 'len_func1', correctAnswers: ['len'], hint: 'What function tells you how many items are in a list?' },
                    { id: 'sum_func', correctAnswers: ['sum'], hint: 'What function adds up all numbers in a list?' },
                    { id: 'len_func2', correctAnswers: ['len'], hint: 'What function gives you the count for calculating average?' }
                ],
                explanation: 'Perfect! You\'ve successfully organized the chaos into neat class rosters using simple lists!'
            }
        ],
        successMessage: 'Crisis resolved! You\'ve mastered lists, loops, conditionals, and string methods to save Professor Scatterbrain\'s classes!'
    },

    'admin-alice': {
        title: 'Crisis Resolution: Process the Application Backlog!',
        description: 'The enrollment system crashed! Complete the algorithm to automatically process student applications.',
        steps: [
            {
                title: 'Step 1: Set Up Application Categories',
                description: 'Create lists to organize applications by status. Fill in the list names:',
                codeTemplate: `# Create categories for processing
______ = []  # Students who meet all criteria
______ = []  # Students below minimum standards  
______ = []  # Students needing human review
print("Application processing system ready!")`,
                blanks: [
                    { id: 'approved', correctAnswers: ['approved', 'accepted'], hint: 'What would you call a list of approved students? Try simply approved' },
                    { id: 'rejected', correctAnswers: ['rejected', 'denied'], hint: 'What would you call a list of rejected students? Try simply rejected' },
                    { id: 'manual_review', correctAnswers: ['manual_review', 'review', 'pending'], hint: 'What would you call students needing manual review? Try simply manual_review' }
                ],
                explanation: 'Great! You\'ve set up the organizational structure for processing applications.'
            },
            {
                title: 'Step 2: Define Admission Criteria',
                description: 'Set the standards for automatic decisions. Complete the criteria:',
                codeTemplate: `# Admission thresholds
MIN_GPA_APPROVE = ______  # Minimum GPA for auto-approval
MIN_SAT_APPROVE = ______  # Minimum SAT for auto-approval
MIN_GPA_CONSIDER = ______  # Minimum GPA to consider
MIN_SAT_CONSIDER = ______  # Minimum SAT to consider

print(f"Auto-approve: GPA >= {MIN_GPA_APPROVE}, SAT >= {MIN_SAT_APPROVE}")`,
                blanks: [
                    { id: 'gpa_approve', correctAnswers: ['3.5', '3.6', '3.7'], hint: 'What GPA threshold for automatic approval? (3.5-3.7)' },
                    { id: 'sat_approve', correctAnswers: ['1300', '1350', '1400'], hint: 'What SAT threshold for automatic approval? (1300-1400)' },
                    { id: 'gpa_consider', correctAnswers: ['3.0', '2.8', '2.9'], hint: 'What minimum GPA to even consider? (2.8-3.0)' },
                    { id: 'sat_consider', correctAnswers: ['1100', '1050', '1150'], hint: 'What minimum SAT to even consider? (1050-1150)' }
                ],
                explanation: 'Perfect! You\'ve established clear, fair criteria for automated decision-making.'
            },
            {
                title: 'Step 3: Process Each Application',
                description: 'Loop through applications and make decisions. We\'ll use simple lists format [name, gpa, sat, essays]:',
                codeTemplate: `applications = [
    ["Jordan Kim", 3.8, 1420, True],
    ["Taylor Singh", 2.7, 1000, True],
    ["Alex Chen", 3.6, 1350, False]
]

for app in ______:
    name = app[______]
    gpa = app[______] 
    sat = app[______]
    essays = app[______]
    
    print(f"Processing {name}: GPA={gpa}, SAT={sat}")`,
                blanks: [
                    { id: 'applications', correctAnswers: ['applications'], hint: 'What is the name of the list we\'re processing?' },
                    { id: 'name_index', correctAnswers: ['0'], hint: 'What index holds the name in [name, gpa, sat, essays]?' },
                    { id: 'gpa_index', correctAnswers: ['1'], hint: 'What index holds the GPA in [name, gpa, sat, essays]?' },
                    { id: 'sat_index', correctAnswers: ['2'], hint: 'What index holds the SAT in [name, gpa, sat, essays]?' },
                    { id: 'essays_index', correctAnswers: ['3'], hint: 'What index holds the essays status in [name, gpa, sat, essays]?' }
                ],
                explanation: 'Excellent! You\'re extracting all the necessary data from each application using list indexing.'
            },
            {
                title: 'Step 4: Make Automated Decisions',
                description: 'Use conditional logic to categorize applications. Complete the if statements:',
                codeTemplate: `# Inside the application loop...
if gpa >= MIN_GPA_APPROVE ______ sat >= MIN_SAT_APPROVE ______ essays:
    approved.______(app)
    print("  → APPROVED")
elif gpa < MIN_GPA_CONSIDER ______ sat < MIN_SAT_CONSIDER:
    rejected.______(app) 
    print("  → REJECTED")
else:
    manual_review.______(app)
    print("  → MANUAL REVIEW")`,
                blanks: [
                    { id: 'and1', correctAnswers: ['and'], hint: 'What operator requires ALL conditions to be true?' },
                    { id: 'and2', correctAnswers: ['and'], hint: 'What operator requires ALL conditions to be true?' },
                    { id: 'append1', correctAnswers: ['append'], hint: 'What method adds an item to a list?' },
                    { id: 'or1', correctAnswers: ['or'], hint: 'What operator is true if ANY condition is true?' },
                    { id: 'append2', correctAnswers: ['append'], hint: 'What method adds an item to a list?' },
                    { id: 'append3', correctAnswers: ['append'], hint: 'What method adds an item to a list?' }
                ],
                explanation: 'Perfect! Your algorithm now makes consistent, fair decisions based on the criteria using simple list structures.'
            }
        ],
        successMessage: 'Crisis averted! You\'ve automated the application process using conditionals, boolean logic, and simple list structures!'
    },

    'researcher-ray': {
        title: 'Crisis Resolution: Separate the Experimental Data!',
        description: 'Your research data is completely scrambled! Complete the algorithm to separate and analyze data by experiment type.',
        steps: [
            {
                title: 'Step 1: Create Experiment Datasets',
                description: 'Set up separate lists for each experiment. Fill in the variable names:',
                codeTemplate: `# Organize data by experiment type
______ = []  # For temperature readings
______ = []  # For pressure readings

print("Experiment datasets initialized")`,
                blanks: [
                    { id: 'temp_data', correctAnswers: ['temperature_data', 'temp_data', 'temperature'], hint: 'What would you name temperature experiment data? Try temperature' },
                    { id: 'pressure_data', correctAnswers: ['pressure_data', 'blood_pressure', 'pressure'], hint: 'What would you name pressure experiment data? Try pressure' }
                ],
                explanation: 'Great! You\'ve created organized containers for each type of experimental data.'
            },
            {
                title: 'Step 2: Process Mixed Research Data',
                description: 'Loop through the mixed data and extract information. Each data point is [reading, unit, subject]:',
                codeTemplate: `mixed_data = [
    [98.6, "temp", "P001"],
    [145, "pressure", "P002"],
    [99.1, "temp", "P003"],
    [134, "pressure", "P004"]
]

for data_point in ______:
    reading = data_point[______]
    unit = data_point[______]
    subject = data_point[______]
    
    print(f"Processing: {reading} {unit} from {subject}")`,
                blanks: [
                    { id: 'mixed_data', correctAnswers: ['mixed_data'], hint: 'What is the name of the list containing all the mixed data?' },
                    { id: 'reading_index', correctAnswers: ['0'], hint: 'What index holds the measurement value in [reading, unit, subject]?' },
                    { id: 'unit_index', correctAnswers: ['1'], hint: 'What index holds the unit type in [reading, unit, subject]?' },
                    { id: 'subject_index', correctAnswers: ['2'], hint: 'What index holds the subject ID in [reading, unit, subject]?' }
                ],
                explanation: 'Perfect! You\'re extracting all the important information from each data point using list indexing.'
            },
            {
                title: 'Step 3: Sort Data by Experiment Type',
                description: 'Use conditionals to put each reading in the right experiment. Complete the sorting logic:',
                codeTemplate: `# Inside the data processing loop...
if unit == "______":
    temperature_data.______(data_point)
    print(f"  → Added to temperature experiment")
elif unit == "______":
    pressure_data.______(data_point)
    print(f"  → Added to pressure experiment")`,
                blanks: [
                    { id: 'temp_unit', correctAnswers: ['temp', 'temperature'], hint: 'What unit value indicates temperature data?' },
                    { id: 'temp_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' },
                    { id: 'pressure_unit', correctAnswers: ['pressure', 'bp'], hint: 'What unit value indicates pressure data?' },
                    { id: 'pressure_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' }
                ],
                explanation: 'Excellent! Now each measurement is going to its correct experiment dataset.'
            },
            {
                title: 'Step 4: Analyze the Separated Data',
                description: 'Calculate statistics for each experiment. Complete the analysis:',
                codeTemplate: `# Analyze temperature data
temp_readings = [d[0] for d in temperature_data]  # Get all readings (index 0)
if temp_readings:
    avg_temp = ______(temp_readings) / ______(temp_readings)
    max_temp = ______(temp_readings)
    min_temp = ______(temp_readings)
    
    print(f"Temperature Analysis:")
    print(f"  Average: {avg_temp:.1f}°F") 
    print(f"  Range: {min_temp}°F - {max_temp}°F")
    print(f"  Subjects: {______(temperature_data)}")`,
                blanks: [
                    { id: 'sum_func', correctAnswers: ['sum'], hint: 'What function adds up all numbers in a list?' },
                    { id: 'len_func1', correctAnswers: ['len'], hint: 'What function counts items for calculating average?' },
                    { id: 'max_func', correctAnswers: ['max'], hint: 'What function finds the largest number?' },
                    { id: 'min_func', correctAnswers: ['min'], hint: 'What function finds the smallest number?' },
                    { id: 'len_func2', correctAnswers: ['len'], hint: 'What function counts how many subjects were tested?' }
                ],
                explanation: 'Amazing! You\'ve successfully analyzed the experimental data using simple list structures and can now draw scientific conclusions.'
            }
        ],
        successMessage: 'Research saved! You\'ve mastered data organization, loops, conditionals, and statistical analysis using simple lists to rescue months of work!'
    },

    'it-hero': {
        title: 'Crisis Resolution: Fix the User Management Chaos!',
        description: 'User accounts are scattered and permissions are wrong! Complete the algorithm to organize users and assign proper access.',
        steps: [
            {
                title: 'Step 1: Set Up User Categories',
                description: 'Create lists to organize different types of users. Fill in the category names:',
                codeTemplate: `# Organize users by type and status
______ = []  # Faculty members
______ = []  # Student accounts
______ = []  # Administrative staff
______ = []  # Suspended accounts

print("User management system initialized")`,
                blanks: [
                    { id: 'professors', correctAnswers: ['professors', 'faculty', 'teachers'], hint: 'What would you call a list of faculty members or professors?' },
                    { id: 'students', correctAnswers: ['students', 'student_accounts'], hint: 'What would you call a list of students? Try students' },
                    { id: 'staff', correctAnswers: ['staff', 'admin_staff', 'administrators'], hint: 'What would you call a list of staff members? Try staff, or admin_staff' },
                    { id: 'suspended', correctAnswers: ['suspended', 'suspended_accounts', 'blocked'], hint: 'What would you call accounts that are suspended? Try suspended or blocked' }
                ],
                explanation: 'Perfect! You\'ve created organized categories for different types of university users.'
            },
            {
                title: 'Step 2: Process User Account Data',
                description: 'Parse each user record and extract information. Complete the data extraction:',
                codeTemplate: `user_records = [
    "john.doe,professor,computer science,active",
    "alice.brown,professor,mathematics,active",
    "frank.taylor,professor,biology,active",
    "charlie.davis,student,computer science,active",
    "eve.martinez,student,mathematics,active",
    "bob.wilson,staff,it department,active",
    "diana.lee,staff,registrar,active",
    "grace.wong,staff,library,active",
    "jane.smith,professor,biology,suspended"
]

for user_record in ______:
    # Split the comma-separated data
    parts = user_record.______(",")
    username = parts[______]
    user_type = parts[______]
    department = parts[______] 
    status = parts[______]
    
    print(f"Processing: {username} ({user_type})")`,
                blanks: [
                    { id: 'user_records', correctAnswers: ['user_records'], hint: 'What is the name of the list we\'re processing?' },
                    { id: 'split_method', correctAnswers: ['split'], hint: 'What method separates a string by commas?' },
                    { id: 'username_index', correctAnswers: ['0'], hint: 'What index is the username (first item)?' },
                    { id: 'type_index', correctAnswers: ['1'], hint: 'What index is the user type (second item)?' },
                    { id: 'dept_index', correctAnswers: ['2'], hint: 'What index is the department (third item)?' },
                    { id: 'status_index', correctAnswers: ['3'], hint: 'What index is the status (fourth item)?' }
                ],
                explanation: 'Great! You\'re extracting all the key information from each user account record.'
            },
            {
                title: 'Step 3: Categorize Users by Type and Status',
                description: 'Sort users into appropriate categories. We\'ll store users as [username, department, status]:',
                codeTemplate: `# Create user list
user = [username, department, status]

# Sort by status first, then by type
if status == "______":
    suspended.______(user)
    print(f"  → SUSPENDED ACCOUNT")
elif user_type == "______":
    professors.______(user) 
    print(f"  → PROFESSOR")
elif user_type == "______":
    students.______(user)
    print(f"  → STUDENT")
elif user_type == "______":
    staff.______(user)
    print(f"  → STAFF")`,
                blanks: [
                    { id: 'suspended_status', correctAnswers: ['suspended', 'blocked', 'inactive'], hint: 'What status indicates a suspended account?' },
                    { id: 'suspended_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' },
                    { id: 'professor_type', correctAnswers: ['professor', 'faculty', 'teacher'], hint: 'What user type indicates teaching staff?' },
                    { id: 'professor_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' },
                    { id: 'student_type', correctAnswers: ['student'], hint: 'What user type indicates students?' },
                    { id: 'student_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' },
                    { id: 'staff_type', correctAnswers: ['staff', 'admin'], hint: 'What user type indicates administrative staff?' },
                    { id: 'staff_append', correctAnswers: ['append'], hint: 'What method adds an item to a list?' }
                ],
                explanation: 'Excellent! Users are now properly categorized by their role and account status using simple lists.'
            },
            {
                title: 'Step 4: Display User Management Report',
                description: 'Generate a summary report of all organized users. Complete the display code:',
                codeTemplate: `print("\\n=== USER MANAGEMENT REPORT ===")

total_active = ______(professors) + ______(students) + ______(staff)

print(f"\\nActive accounts: {total_active}")
print(f"Suspended accounts: {______(suspended)}")

print(f"\\n👨‍🏫 PROFESSORS ({______(professors)} accounts):")
for prof in professors:
    print(f"   • {prof[______]} ({prof[______]})")

print(f"\\n👨‍🎓 STUDENTS ({______(students)} accounts):")
for student in students:
    print(f"   • {student[______]} ({student[______]})")

print("\\n✅ User management chaos resolved!")`,
                blanks: [
                    { id: 'len_prof', correctAnswers: ['len'], hint: 'What function counts items in the professors list?' },
                    { id: 'len_students', correctAnswers: ['len'], hint: 'What function counts items in the students list?' },
                    { id: 'len_staff', correctAnswers: ['len'], hint: 'What function counts items in the staff list?' },
                    { id: 'len_suspended', correctAnswers: ['len'], hint: 'What function counts items in the suspended list?' },
                    { id: 'len_prof2', correctAnswers: ['len'], hint: 'What function counts professors for display?' },
                    { id: 'username_index1', correctAnswers: ['0'], hint: 'What index holds the username in [username, department, status]?' },
                    { id: 'dept_index1', correctAnswers: ['1'], hint: 'What index holds the department in [username, department, status]?' },
                    { id: 'len_students2', correctAnswers: ['len'], hint: 'What function counts students for display?' },
                    { id: 'username_index2', correctAnswers: ['0'], hint: 'What index holds the username in [username, department, status]?' },
                    { id: 'dept_index2', correctAnswers: ['1'], hint: 'What index holds the department in [username, department, status]?' }
                ],
                explanation: 'Perfect! You\'ve created a comprehensive user management system using only simple lists and indexing.'
            }
        ],
        successMessage: 'IT crisis resolved! You\'ve mastered user management using simple data structures, string processing, and automated organization systems!'
    }
};

// Function to load interactive final challenge
function loadInteractiveFinalChallenge() {
    const challenge = interactiveFinalChallenges[gameState.playerRole];
    
    document.getElementById('finalLevelTitle').textContent = `Level 6: ${challenge.title}`;
    document.getElementById('finalChallengeTitle').textContent = challenge.title;
    document.getElementById('finalScenarioText').textContent = challenge.description;
    
    const challengeContent = document.getElementById('finalChallengeContent');
    challengeContent.innerHTML = '';
    
    challenge.steps.forEach((step, stepIndex) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'algorithm-step';
        stepDiv.innerHTML = `
            <h4><span class="step-number">${stepIndex + 1}</span>${step.title}</h4>
            <p>${step.description}</p>
            <div class="code-challenge">
                <pre class="code-template">${renderCodeTemplate(step.codeTemplate, step.blanks, stepIndex)}</pre>
                <div class="step-controls">
                    <button class="btn check-step" onclick="checkStep(${stepIndex})" id="check-step-${stepIndex}">Check My Code</button>
                    <button class="btn hint-btn" onclick="showHints(${stepIndex})" id="hint-step-${stepIndex}">Show Hints</button>
                </div>
                <div class="step-feedback" id="step-feedback-${stepIndex}"></div>
                <div class="step-hints hidden" id="step-hints-${stepIndex}">
                    ${step.blanks.map((blank, i) => `<p><strong>Blank ${i + 1}:</strong> ${blank.hint}</p>`).join('')}
                </div>
            </div>
        `;
        challengeContent.appendChild(stepDiv);
    });
    
    // Store challenge data for checking
    window.currentChallenge = challenge;
}

function renderCodeTemplate(template, blanks, stepIndex) {
    let rendered = template;
    let blankIndex = 0;
    
    // Replace all instances of "______" with input fields
    while (rendered.includes('______') && blankIndex < blanks.length) {
        const blank = blanks[blankIndex];
        const inputId = `step-${stepIndex}-blank-${blankIndex}`;
        const placeholder = blank.correctAnswers[0].substring(0, 3) + '...';
        rendered = rendered.replace('______', `<input type="text" class="code-input" id="${inputId}" placeholder="${placeholder}" />`);
        blankIndex++;
    }
    
    return rendered;
}

function checkStep(stepIndex) {
    const step = window.currentChallenge.steps[stepIndex];
    const feedback = document.getElementById(`step-feedback-${stepIndex}`);
    let allCorrect = true;
    let results = [];
    
    step.blanks.forEach((blank, blankIndex) => {
        const input = document.getElementById(`step-${stepIndex}-blank-${blankIndex}`);
        const userAnswer = input.value.trim().toLowerCase();
        const isCorrect = blank.correctAnswers.some(answer => answer.toLowerCase() === userAnswer);
        
        if (isCorrect) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
            results.push(`✅ Blank ${blankIndex + 1}: Correct!`);
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            results.push(`❌ Blank ${blankIndex + 1}: Try again`);
            allCorrect = false;
        }
    });
    
    if (allCorrect) {
        feedback.innerHTML = `
            <div class="feedback correct">
                <h4>🎉 Step ${stepIndex + 1} Complete!</h4>
                <p>${step.explanation}</p>
            </div>
        `;
        document.getElementById(`check-step-${stepIndex}`).textContent = 'Completed ✓';
        document.getElementById(`check-step-${stepIndex}`).disabled = true;
        
        // Check if all steps are complete
        checkFinalChallengeCompletion();
    } else {
        feedback.innerHTML = `
            <div class="feedback incorrect">
                <h4>Not quite right...</h4>
                ${results.map(result => `<p>${result}</p>`).join('')}
                <p>Try again or use the hints!</p>
            </div>
        `;
    }
}

function showHints(stepIndex) {
    const hints = document.getElementById(`step-hints-${stepIndex}`);
    hints.classList.toggle('hidden');
    const button = document.getElementById(`hint-step-${stepIndex}`);
    button.textContent = hints.classList.contains('hidden') ? 'Show Hints' : 'Hide Hints';
}

function checkFinalChallengeCompletion() {
    const totalSteps = window.currentChallenge.steps.length;
    const completedSteps = document.querySelectorAll('.check-step:disabled').length;
    
    if (completedSteps === totalSteps) {
        // All steps completed! Enable final button without showing full solution yet
        const challengeContent = document.getElementById('finalChallengeContent');
        const successDiv = document.createElement('div');
        successDiv.className = 'challenge-success';
        successDiv.innerHTML = `
            <div class="success-message">
                <h3>🎉 All Challenges Complete!</h3>
                <p>You've successfully implemented the complete algorithm!</p>
                <p><strong>Ready to see your full solution in action and resolve the crisis?</strong></p>
            </div>
        `;
        challengeContent.appendChild(successDiv);
        
        // Enable and show the final completion button
        const finalButton = document.getElementById('completeLevel6');
        finalButton.style.display = 'block';
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupCharacterCreation();
});

// Generate full solution code for each scenario
function generateFullSolutionCode(playerRole) {
    const solutions = {
        'professor-scatterbrain': `# Complete Student Roster Organization Algorithm
# Crisis: Scrambled class rosters need to be sorted

# Step 1: Set up data structure
cs101_roster = []
math200_roster = []
phys150_roster = []

# Step 2: The mixed student data from interactive challenge
mixed_students = ["Kai,CS101,95", "Zara,MATH200,87", "Alex,CS101,92"]

print("=== ORGANIZING CLASS ROSTERS ===")
print(f"Processing {len(mixed_students)} student records...")
print()

# Step 3: Process each student record
for student_record in mixed_students:
    # Split the record into parts
    parts = student_record.split(",")
    name = parts[0]
    class_code = parts[1]
    grade = int(parts[2])
    
    # Store as simple list [name, grade]
    student_info = [name, grade]
    
    print(f"Processing: {name} in {class_code} with grade {grade}")
    
    # Step 4: Sort into correct rosters
    if class_code == "CS101":
        cs101_roster.append(student_info)
        print(f"  → Added to CS101")
    elif class_code == "MATH200":
        math200_roster.append(student_info)
        print(f"  → Added to MATH200")
    elif class_code == "PHYS150":
        phys150_roster.append(student_info)
        print(f"  → Added to PHYS150")

print()
print("="*50)
print("ORGANIZED CLASS ROSTERS")
print("="*50)

# Step 5: Display results
print("\\nCS101 - Computer Science:")
for i, student in enumerate(cs101_roster, 1):
    print(f"{i}. {student[0]} - Grade: {student[1]}")

print("\\nMATH200 - Calculus:")  
for i, student in enumerate(math200_roster, 1):
    print(f"{i}. {student[0]} - Grade: {student[1]}")

print("\\nPHYS150 - Physics:")
for i, student in enumerate(phys150_roster, 1):
    print(f"{i}. {student[0]} - Grade: {student[1]}")

# Calculate statistics
if cs101_roster:
    grades = [s[1] for s in cs101_roster]
    avg = sum(grades) / len(grades)
    print(f"\\nCS101 Average: {avg:.1f}")

if math200_roster:
    grades = [s[1] for s in math200_roster]
    avg = sum(grades) / len(grades)
    print(f"MATH200 Average: {avg:.1f}")

print(f"\\nTotal students in CS101: {len(cs101_roster)}")
print(f"\\n✅ Crisis resolved! All {len(mixed_students)} students organized!")`,

        'admin-alice': `# Complete Application Processing Algorithm
# Crisis: Enrollment system crashed, applications need processing

# Step 1: Set up processing categories
approved = []
rejected = []
manual_review = []

# Step 2: Define admission criteria
MIN_GPA_APPROVE = 3.5
MIN_SAT_APPROVE = 1350
MIN_GPA_CONSIDER = 3.0
MIN_SAT_CONSIDER = 1100

# Step 3: Load application data from interactive challenge
# Format: [name, gpa, sat, essays]
applications = [
    ["Jordan Kim", 3.8, 1420, True],
    ["Taylor Singh", 2.7, 1000, True],
    ["Alex Chen", 3.6, 1350, False]
]

print("="*60)
print("APPLICATION PROCESSING SYSTEM")
print("="*60)
print(f"Processing {len(applications)} applications...")
print(f"Criteria: GPA >= {MIN_GPA_APPROVE}, SAT >= {MIN_SAT_APPROVE}, Essays required")
print()

# Step 4: Process each application
for app in applications:
    name = app[0]
    gpa = app[1]
    sat = app[2]
    essays = app[3]
    
    print(f"Processing {name}: GPA={gpa}, SAT={sat}, Essays={'✓' if essays else '✗'}")
    
    # Decision logic
    if gpa >= MIN_GPA_APPROVE and sat >= MIN_SAT_APPROVE and essays:
        approved.append(app)
        print("  → APPROVED (Meets all criteria)")
    elif gpa < MIN_GPA_CONSIDER or sat < MIN_SAT_CONSIDER:
        rejected.append(app)
        print("  → REJECTED (Below minimum standards)")
    else:
        manual_review.append(app)
        print("  → MANUAL REVIEW (Requires human decision)")

print()
print("="*60)
print("APPLICATION PROCESSING COMPLETE")
print("="*60)

# Step 5: Generate report
print(f"\\n✅ APPROVED ({len(approved)} students):")
for student in approved:
    print(f"   • {student[0]} (GPA: {student[1]}, SAT: {student[2]})")

print(f"\\n❌ REJECTED ({len(rejected)} students):")
for student in rejected:
    print(f"   • {student[0]} (GPA: {student[1]}, SAT: {student[2]})")

print(f"\\n⏳ MANUAL REVIEW REQUIRED ({len(manual_review)} students):")
for student in manual_review:
    print(f"   • {student[0]} (GPA: {student[1]}, SAT: {student[2]})")

# Statistics
total = len(applications)
print(f"\\n📊 SUMMARY:")
print(f"   Total processed: {total}")
print(f"   Auto-approved: {len(approved)} ({len(approved)/total*100:.1f}%)")
print(f"   Auto-rejected: {len(rejected)} ({len(rejected)/total*100:.1f}%)")
print(f"   Manual review: {len(manual_review)} ({len(manual_review)/total*100:.1f}%)")
print("\\n🎉 Enrollment crisis averted!")`,

        'researcher-ray': `# Complete Research Data Recovery Algorithm
# Crisis: Mixed experimental data needs separation

# Step 1: Create experiment datasets
temperature_data = []
pressure_data = []

# Step 2: The mixed research data from interactive challenge
# Format: [reading, unit, subject]
mixed_data = [
    [98.6, "temp", "P001"],
    [145, "pressure", "P002"],
    [99.1, "temp", "P003"],
    [134, "pressure", "P004"]
]

print("="*60)
print("RESEARCH DATA RECOVERY SYSTEM")
print("="*60)
print(f"Processing {len(mixed_data)} mixed research readings...")
print()

# Step 3: Process and separate data
for data_point in mixed_data:
    reading = data_point[0]
    unit = data_point[1]
    subject = data_point[2]
    
    print(f"Processing: {reading} {unit} from {subject}")
    
    if unit == "temp":
        temperature_data.append(data_point)
        print("  → Added to temperature experiment")
    elif unit == "pressure":
        pressure_data.append(data_point)
        print("  → Added to pressure experiment")

print()
print("="*60)
print("DATA SEPARATION COMPLETE")
print("="*60)

# Step 4: Analyze temperature data
print("\\n🌡️ TEMPERATURE EXPERIMENT ANALYSIS:")
temp_readings = [d[0] for d in temperature_data]
if temp_readings:
    avg_temp = sum(temp_readings) / len(temp_readings)
    max_temp = max(temp_readings)
    min_temp = min(temp_readings)
    
    print(f"   Subjects tested: {len(temperature_data)}")
    print(f"   Average temperature: {avg_temp:.1f}°F")
    print(f"   Temperature range: {min_temp}°F - {max_temp}°F")
    
    print("\\n   Individual Results:")
    for data in temperature_data:
        status = "Normal" if 97 <= data[0] <= 99 else "Abnormal"
        print(f"     {data[2]}: {data[0]}°F - {status}")

# Step 5: Analyze pressure data
print("\\n🩺 PRESSURE EXPERIMENT ANALYSIS:")
pressure_readings = [d[0] for d in pressure_data]
if pressure_readings:
    avg_pressure = sum(pressure_readings) / len(pressure_readings)
    max_pressure = max(pressure_readings)
    min_pressure = min(pressure_readings)
    
    print(f"   Subjects tested: {len(pressure_data)}")
    print(f"   Average pressure: {avg_pressure:.1f} mmHg")
    print(f"   Pressure range: {min_pressure} - {max_pressure} mmHg")
    
    print("\\n   Individual Results:")
    for data in pressure_data:
        status = "Normal" if 120 <= data[0] <= 160 else "Abnormal"
        print(f"     {data[2]}: {data[0]} mmHg - {status}")

print(f"\\n✅ Research data successfully recovered and organized!")
print(f"All {len(mixed_data)} readings properly categorized for analysis.")`,

        'it-hero': `# Complete User Management System
# Crisis: User accounts and permissions are chaotic

# Step 1: Set up user categories
professors = []
students = []
staff = []
suspended = []

# Step 2: Chaotic user data from interactive challenge
user_records = [
    "john.doe,professor,computer science,active",
    "alice.brown,professor,mathematics,active",
    "frank.taylor,professor,biology,active",
    "charlie.davis,student,computer science,active",
    "eve.martinez,student,mathematics,active",
    "bob.wilson,staff,it department,active",
    "diana.lee,staff,registrar,active",
    "grace.wong,staff,library,active",
    "jane.smith,professor,biology,suspended"
]

print("="*60)
print("USER MANAGEMENT RECOVERY SYSTEM")
print("="*60)
print(f"Processing {len(user_records)} user accounts...")
print()

# Step 3: Process each user record
for user_record in user_records:
    # Parse user information
    parts = user_record.split(",")
    username = parts[0]
    user_type = parts[1]
    department = parts[2]
    status = parts[3]
    
    # Store as [username, department, status]
    user = [username, department, status]
    
    print(f"Processing: {username} ({user_type}, {department}, {status})")
    
    # Sort by status first, then by type
    if status == "suspended":
        suspended.append(user)
        print("  → SUSPENDED ACCOUNT")
    elif user_type == "professor":
        professors.append(user)
        print("  → PROFESSOR")
    elif user_type == "student":
        students.append(user)
        print("  → STUDENT")
    elif user_type == "staff":
        staff.append(user)
        print("  → STAFF")

print()
print("="*60)
print("USER MANAGEMENT REPORT")
print("="*60)

# Step 4: Generate management report
total_active = len(professors) + len(students) + len(staff)

print(f"\\n📊 ACCOUNT SUMMARY:")
print(f"Total accounts processed: {len(user_records)}")
print(f"Active accounts: {total_active}")
print(f"Suspended accounts: {len(suspended)}")

print(f"\\n👨‍🏫 PROFESSORS ({len(professors)} accounts):")
for prof in professors:
    print(f"   • {prof[0]} ({prof[1]})")

print(f"\\n👨‍🎓 STUDENTS ({len(students)} accounts):")
for student in students:
    print(f"   • {student[0]} ({student[1]})")

print(f"\\n👨‍💼 STAFF ({len(staff)} accounts):")
for staff_member in staff:
    print(f"   • {staff_member[0]} ({staff_member[1]})")

if suspended:
    print(f"\\n⚠️ SUSPENDED ACCOUNTS ({len(suspended)}):")
    for suspended_user in suspended:
        print(f"   • {suspended_user[0]} - Requires review")

# Step 5: Assign permissions
print("\\n🔐 PERMISSIONS ASSIGNED:")
print("   Professors: Full academic access")
print("   Students: Course and library access")  
print("   Staff: Administrative system access")

print(f"\\n✅ User management chaos resolved!")
print(f"All {len(user_records)} accounts properly organized and secured.")

print()
print("="*60)
print("USER MANAGEMENT REPORT")
print("="*60)

# Step 5: Assign permissions
print("\\n🔐 PERMISSIONS ASSIGNED:")
print("   Professors: Full academic access")
print("   Students: Course and library access")
print("   Staff: Administrative system access")

print(f"\\n✅ User management chaos resolved!")
print(f"All {len(user_records)} accounts properly organized and secured.")`
    };
    
    return solutions[playerRole] || 'Code solution not available';
}

function generateSolutionOutput(playerRole) {
    const outputs = {
        'professor-scatterbrain': `=== ORGANIZING CLASS ROSTERS ===
Processing 6 student records...

Processing: Aisha Patel in CS101 with grade 95
  → Added to CS101
Processing: Carlos Rodriguez in MATH201 with grade 87
  → Added to MATH201
Processing: Kenji Tanaka in CS101 with grade 92
  → Added to CS101
Processing: Kwame Asante in MATH201 with grade 88
  → Added to MATH201
Processing: Amara Johnson in CS101 with grade 94
  → Added to CS101
Processing: Fatima Al-Rashid in CS102 with grade 83
  → CS102 section (handled separately)

==================================================
ORGANIZED CLASS ROSTERS
==================================================

CS-101: Introduction to Programming
1. Aisha Patel - Grade: 95
2. Kenji Tanaka - Grade: 92
3. Amara Johnson - Grade: 94

MATH-201: Calculus II
1. Carlos Rodriguez - Grade: 87
2. Kwame Asante - Grade: 88

CS101 Average: 93.7
MATH201 Average: 87.5

✅ Crisis resolved! All 6 students organized!`,

        'admin-alice': `============================================================
APPLICATION PROCESSING SYSTEM
============================================================
Processing 3 applications...
Criteria: GPA >= 3.5, SAT >= 1350, Essays required

Processing Jordan Kim: GPA=3.8, SAT=1420, Essays=✓
  → APPROVED (Meets all criteria)
Processing Taylor Singh: GPA=2.7, SAT=1000, Essays=✓
  → REJECTED (Below minimum standards)
Processing Alex Chen: GPA=3.6, SAT=1350, Essays=✗
  → MANUAL REVIEW (Requires human decision)

============================================================
APPLICATION PROCESSING COMPLETE
============================================================

✅ APPROVED (1 students):
   • Jordan Kim (GPA: 3.8, SAT: 1420)

❌ REJECTED (1 students):
   • Taylor Singh (GPA: 2.7, SAT: 1000)

⏳ MANUAL REVIEW REQUIRED (1 students):
   • Alex Chen (GPA: 3.6, SAT: 1350)

📊 SUMMARY:
   Total processed: 3
   Auto-approved: 1 (33.3%)
   Auto-rejected: 1 (33.3%)
   Manual review: 1 (33.3%)

🎉 Enrollment crisis averted!`,

        'researcher-ray': `============================================================
RESEARCH DATA RECOVERY SYSTEM
============================================================
Processing 4 mixed research readings...

Processing: 98.6 temp from P001
  → Added to temperature experiment
Processing: 145 pressure from P002
  → Added to pressure experiment
Processing: 99.1 temp from P003
  → Added to temperature experiment
Processing: 134 pressure from P004
  → Added to pressure experiment

============================================================
DATA SEPARATION COMPLETE
============================================================

🌡️ TEMPERATURE EXPERIMENT ANALYSIS:
   Subjects tested: 2
   Average temperature: 98.9°F
   Temperature range: 98.6°F - 99.1°F

   Individual Results:
     P001: 98.6°F - Normal
     P003: 99.1°F - Normal

🩺 PRESSURE EXPERIMENT ANALYSIS:
   Subjects tested: 2
   Average pressure: 139.5 mmHg
   Pressure range: 134 - 145 mmHg

   Individual Results:
     P002: 145 mmHg - Normal
     P004: 134 mmHg - Normal

✅ Research data successfully recovered and organized!
All 4 readings properly categorized for analysis.`,

        'it-hero': `============================================================
USER MANAGEMENT RECOVERY SYSTEM
============================================================
Processing 3 user accounts...

Processing: elena.garcia (professor, biology, active)
  → PROFESSOR
Processing: mike.johnson (student, engineering, suspended)
  → SUSPENDED ACCOUNT
Processing: sarah.wilson (staff, it_department, active)
  → STAFF

============================================================
USER MANAGEMENT REPORT
============================================================

📊 ACCOUNT SUMMARY:
Total accounts processed: 3
Active accounts: 2
Suspended accounts: 1

👨‍🏫 PROFESSORS (1 accounts):
   • elena.garcia (biology)

👨‍🎓 STUDENTS (0 accounts):

👨‍💼 STAFF (1 accounts):
   • sarah.wilson (it_department)

⚠️ SUSPENDED ACCOUNTS (1):
   • mike.johnson - Requires review

🔐 PERMISSIONS ASSIGNED:
   Professors: Full academic access
   Students: Course and library access
   Staff: Administrative system access

✅ User management chaos resolved!
All 3 accounts properly organized and secured.`
    };
    
    return outputs[playerRole] || 'Output not available';
}

function getSkillsForRole(playerRole) {
    const skillSets = {
        'professor-scatterbrain': [
            'String manipulation with split() method',
            'List creation and management',
            'For loop iteration over sequences',
            'Conditional logic with if/elif statements',
            'List indexing and data extraction',
            'List methods: append() and len()',
            'Mathematical operations (sum, average)',
            'Data organization and categorization'
        ],
        'admin-alice': [
            'Boolean logic with and/or operators',
            'Complex conditional statements',
            'List processing and categorization',
            'Data validation and filtering',
            'Statistical calculations and reporting',
            'Automated decision-making systems',
            'User input validation concepts',
            'Business logic implementation'
        ],
        'researcher-ray': [
            'Data type identification and sorting',
            'Scientific data analysis methods',
            'Statistical functions (sum, max, min, average)',
            'List comprehensions for data extraction',
            'Conditional data filtering',
            'Research data organization',
            'Pattern recognition in datasets',
            'Experimental result interpretation'
        ],
        'it-hero': [
            'User account management systems',
            'String parsing and data extraction',
            'Multi-level conditional logic',
            'System administration concepts',
            'Access control and permissions',
            'Data security and organization',
            'User categorization and reporting',
            'IT workflow automation'
        ]
    };
    
    return skillSets[playerRole] || [
        'Variables and Data Types',
        'List Operations',
        'Conditional Logic',
        'Loop Structures',
        'Problem Solving'
    ];
}

function generateSolutionOutput(playerRole) {
    const outputs = {
        'professor-scatterbrain': `=== ORGANIZING CLASS ROSTERS ===
Processing 3 student records...

Processing: Kai in CS101 with grade 95
  → Added to CS101
Processing: Zara in MATH200 with grade 87
  → Added to MATH200
Processing: Alex in CS101 with grade 92
  → Added to CS101

==================================================
ORGANIZED CLASS ROSTERS
==================================================

CS101 - Computer Science:
1. Kai - Grade: 95
2. Alex - Grade: 92

MATH200 - Calculus:
1. Zara - Grade: 87

PHYS150 - Physics:
(No students)

CS101 Average: 93.5
MATH200 Average: 87.0

Total students in CS101: 2

✅ Crisis resolved! All 3 students organized!`,

        'admin-alice': `============================================================
APPLICATION PROCESSING SYSTEM
============================================================
Processing 3 applications...
Criteria: GPA >= 3.5, SAT >= 1350, Essays required

Processing Jordan Kim: GPA=3.8, SAT=1420, Essays=✓
  → APPROVED (Meets all criteria)
Processing Taylor Singh: GPA=2.7, SAT=1000, Essays=✓
  → REJECTED (Below minimum standards)
Processing Alex Chen: GPA=3.6, SAT=1350, Essays=✗
  → MANUAL REVIEW (Requires human decision)

============================================================
APPLICATION PROCESSING COMPLETE
============================================================

✅ APPROVED (1 students):
   • Jordan Kim (GPA: 3.8, SAT: 1420)

❌ REJECTED (1 students):
   • Taylor Singh (GPA: 2.7, SAT: 1000)

⏳ MANUAL REVIEW REQUIRED (1 students):
   • Alex Chen (GPA: 3.6, SAT: 1350)

📊 SUMMARY:
   Total processed: 3
   Auto-approved: 1 (33.3%)
   Auto-rejected: 1 (33.3%)
   Manual review: 1 (33.3%)

🎉 Enrollment crisis averted!`,

        'researcher-ray': `============================================================
RESEARCH DATA RECOVERY SYSTEM
============================================================
Processing 4 mixed research readings...

Processing: 98.6 temp from P001
  → Added to temperature experiment
Processing: 145 pressure from P002
  → Added to pressure experiment
Processing: 99.1 temp from P003
  → Added to temperature experiment
Processing: 134 pressure from P004
  → Added to pressure experiment

============================================================
DATA SEPARATION COMPLETE
============================================================

🌡️ TEMPERATURE EXPERIMENT ANALYSIS:
   Subjects tested: 2
   Average temperature: 98.9°F
   Temperature range: 98.6°F - 99.1°F

   Individual Results:
     P001: 98.6°F - Normal
     P003: 99.1°F - Normal

🩺 PRESSURE EXPERIMENT ANALYSIS:
   Subjects tested: 2
   Average pressure: 139.5 mmHg
   Pressure range: 134 - 145 mmHg

   Individual Results:
     P002: 145 mmHg - Normal
     P004: 134 mmHg - Normal

✅ Research data successfully recovered and organized!
All 4 readings properly categorized for analysis.`,

        'it-hero': `============================================================
USER MANAGEMENT RECOVERY SYSTEM
============================================================
Processing 9 user accounts...

Processing: john.doe (professor, computer science, active)
  → PROFESSOR
Processing: alice.brown (professor, mathematics, active)
  → PROFESSOR
Processing: frank.taylor (professor, biology, active)
  → PROFESSOR
Processing: charlie.davis (student, computer science, active)
  → STUDENT
Processing: eve.martinez (student, mathematics, active)
  → STUDENT
Processing: bob.wilson (staff, it department, active)
  → STAFF
Processing: diana.lee (staff, registrar, active)
  → STAFF
Processing: grace.wong (staff, library, active)
  → STAFF
Processing: jane.smith (professor, biology, suspended)
  → SUSPENDED ACCOUNT

============================================================
USER MANAGEMENT REPORT
============================================================

📊 ACCOUNT SUMMARY:
Total accounts processed: 9  
Active accounts: 8  
Suspended accounts: 1  

👨‍🏫 PROFESSORS (3 accounts):
   • john.doe (computer science)  
   • alice.brown (mathematics)  
   • frank.taylor (biology)

👨‍🎓 STUDENTS (2 accounts):
   • charlie.davis (computer science)  
   • eve.martinez (mathematics)

👨‍💼 STAFF (3 accounts):
   • bob.wilson (it department)  
   • diana.lee (registrar)  
   • grace.wong (library)

⚠️ SUSPENDED ACCOUNTS (1):
   • jane.smith (biology) - Requires review

🔐 PERMISSIONS ASSIGNED:
   Professors: Full academic access  
   Students: Student access  
   Staff: Administrative access  

✅ User management chaos resolved!  
All 9 accounts properly organized and secured.`
    };
    
    return outputs[playerRole] || 'Output not available';
}

function getSkillsForRole(playerRole) {
    const skillSets = {
        'professor-scatterbrain': [
            'String manipulation with split() method',
            'List creation and management',
            'For loop iteration over sequences',
            'Conditional logic with if/elif statements',
            'List indexing and data extraction',
            'List methods: append() and len()',
            'Mathematical operations (sum, average)',
            'Data organization and categorization'
        ],
        'admin-alice': [
            'Boolean logic with and/or operators',
            'Complex conditional statements',
            'List processing and categorization',
            'Data validation and filtering',
            'Statistical calculations and reporting',
            'Automated decision-making systems',
            'User input validation concepts',
            'Business logic implementation'
        ],
        'researcher-ray': [
            'Data type identification and sorting',
            'Scientific data analysis methods',
            'Statistical functions (sum, max, min, average)',
            'List comprehensions for data extraction',
            'Conditional data filtering',
            'Research data organization',
            'Pattern recognition in datasets',
            'Experimental result interpretation'
        ],
        'it-hero': [
            'User account management systems',
            'String parsing and data extraction',
            'Multi-level conditional logic',
            'System administration concepts',
            'Access control and permissions',
            'Data security and organization',
            'User categorization and reporting',
            'IT workflow automation'
        ]
    };
    
    return skillSets[playerRole] || [
        'Variables and Data Types',
        'List Operations',
        'Conditional Logic',
        'Loop Structures',
        'Problem Solving'
    ];

}

function printCertificate() {
    const modal = document.getElementById('certificateModal');
    const scenario = roleScenarios[gameState.playerRole];
    
    // Populate certificate data
    document.getElementById('certificateName').textContent = gameState.playerName;
    document.getElementById('certificateScenario').textContent = `Successfully resolved: ${scenario.crisis}`;
    document.getElementById('certificateDate').textContent = new Date().toLocaleDateString();
    
    // Populate skills based on scenario
    const skills = getSkillsForRole(gameState.playerRole);
    const skillsContainer = document.getElementById('certificateSkills');
    skillsContainer.innerHTML = skills.map(skill => `<div class="skill-item">✅ ${skill}</div>`).join('');
    
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

// New function to print only the certificate
function printCertificateOnly() {
    const certificateContent = document.querySelector('.certificate').cloneNode(true);
    
    // Create a new window with only the certificate content
    const printWindow = window.open('', '_blank', 'width=800,height=600');

    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let semester = '';

    if (month < 5) semester = '10'; 					// Spring
    else if (month > 7 && date < 15) semester = '80';  // Fall 
    else semester = '50';							    // Summer
    let fullDate = `${year}${semester}`;

    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>csci1100_${fullDate}_programintro_certificate_${gameState.playerName}</title>
            <style>
                /* Copy relevant certificate styles */
                body {
                    margin: 0;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    background: white;
                }
                
                .certificate {
                    background: linear-gradient(135deg, #f5f5f5 0%, #e8f5e8 100%);
                    border: 8px solid #4CAF50;
                    border-radius: 15px;
                    padding: 40px;
                    text-align: center;
                    margin: 20px auto;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    page-break-inside: avoid;
                }

                .certificate::before {
                    content: '';
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    right: 15px;
                    bottom: 15px;
                    border: 3px solid #45a049;
                    border-radius: 8px;
                }

                .certificate-header h1 {
                    color: #2e7d32;
                    margin: 0 0 10px 0;
                    font-size: 2.5em;
                }

                .certificate-subtitle {
                    color: #558b2f;
                    font-size: 1.2em;
                    margin-bottom: 30px;
                    font-style: italic;
                }

                .certificate-text {
                    color: #333;
                    font-size: 1.1em;
                    margin: 15px 0;
                }

                .certificate-name {
                    color: #1976d2;
                    font-size: 2.2em;
                    margin: 20px 0;
                    text-decoration: underline;
                    text-decoration-color: #4CAF50;
                }

                .certificate-course {
                    color: #2e7d32;
                    font-size: 1.8em;
                    margin: 20px 0;
                }

                .certificate-scenario {
                    color: #666;
                    font-size: 1.1em;
                    font-style: italic;
                    margin: 20px 0;
                }

                .skills-mastered {
                    margin: 30px 0;
                    padding: 20px;
                    background: rgba(76, 175, 80, 0.1);
                    border-radius: 10px;
                }

                .skills-mastered h4 {
                    color: #2e7d32;
                    margin-bottom: 15px;
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 10px;
                    text-align: left;
                }

                .skill-item {
                    color: #333;
                    padding: 5px 0;
                    font-size: 0.95em;
                }

                .certificate-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 2px solid #4CAF50;
                }

                .certificate-date {
                    color: #666;
                    font-style: italic;
                }

                .certificate-signature {
                    text-align: right;
                    color: #333;
                    line-height: 1.4;
                }

                /* Print-specific styles */
                @media print {
                    body { margin: 0; padding: 0; }
                    .certificate { 
                        margin: 0; 
                        box-shadow: none;
                        page-break-inside: avoid;
                    }
                }
            </style>
        </head>
        <body>
            ${certificateContent.outerHTML}
        </body>
        </html>
    `);
    
    printWindow.document.close();
    
    // Wait for content to load, then trigger print dialog
    printWindow.onload = function() {
        printWindow.focus();
        printWindow.print();
        // Close the window after printing
        printWindow.onafterprint = function() {
            printWindow.close();
        };
    };
}

// 2. Fix the close function - make sure it matches the onclick in HTML
function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    console.log('Closing modal, classes before:', modal.className); // Debug line
    
    modal.classList.add('hidden');
    modal.style.display = 'none'; // Force hide as backup
    
    console.log('Modal classes after:', modal.className); // Debug line
}

// 3. Alternative close function in case the name doesn't match
function closeModal() {
    closeCertificate();
}

// 4. Add click outside to close functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            // Close if clicking the backdrop (not the modal content)
            if (e.target === modal) {
                closeCertificate();
            }
        });
    }
});

// 5. Also ensure the modal starts hidden when page loads
window.addEventListener('load', function() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
    hljs.highlightAll();
});