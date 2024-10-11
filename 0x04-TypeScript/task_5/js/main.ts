// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
  credits: number; // defines a number named credits
  brand: 'Major'; // unique identifier for MajorCredits
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number; // defines a number named credits
  brand: 'Minor'; // unique identifier for MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor'
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, brand: 'Major' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'Major' };
const minorSubject1: MinorCredits = { credits: 2, brand: 'Minor' };
const minorSubject2: MinorCredits = { credits: 1, brand: 'Minor' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`); // Outputs: Total Major Credits: 7
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); // Outputs: Total Minor Credits: 3
