import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

const PYTHON_DATA = [
  {
    "id": 1,
    "name": "Python Basics & Syntax",
    "desc": "Get started with variables, data types, and basic print operations.",
    "exercises": [
      {"name": "Hello Python World", "slug": "hello-python-world", "xp": 15, "difficulty": "easy"},
      {"name": "Variable Vault", "slug": "variable-vault", "xp": 20, "difficulty": "easy"},
      {"name": "Data Type Detective", "slug": "data-type-detective", "xp": 25, "difficulty": "easy"},
      {"name": "Math Operations", "slug": "math-operations", "xp": 20, "difficulty": "easy"},
      {"name": "User Input Portal", "slug": "user-input-portal", "xp": 30, "difficulty": "medium"},
      {"name": "Type Casting", "slug": "type-casting", "xp": 25, "difficulty": "easy"}
    ]
  },
  {
    "id": 2,
    "name": "Control Flow & Conditionals",
    "desc": "Make decisions in your code using if, elif, and else statements.",
    "exercises": [
      {"name": "If Statement Gate", "slug": "if-statement-gate", "xp": 25, "difficulty": "easy"},
      {"name": "Else & Elif Branching", "slug": "else-and-elif-branching", "xp": 30, "difficulty": "medium"},
      {"name": "Logical Operators", "slug": "logical-operators", "xp": 35, "difficulty": "medium"},
      {"name": "Nested Conditions", "slug": "nested-conditions", "xp": 40, "difficulty": "medium"},
      {"name": "Age Checker App", "slug": "age-checker-app", "xp": 30, "difficulty": "easy"},
      {"name": "Simple Calculator", "slug": "simple-calculator", "xp": 45, "difficulty": "medium"}
    ]
  },
  {
    "id": 3,
    "name": "Loops & Iterations",
    "desc": "Automate repetitive tasks using For and While loops.",
    "exercises": [
      {"name": "For Loop Journey", "slug": "for-loop-journey", "xp": 30, "difficulty": "medium"},
      {"name": "While Loop Watch", "slug": "while-loop-watch", "xp": 35, "difficulty": "medium"},
      {"name": "Break & Continue", "slug": "break-and-continue", "xp": 25, "difficulty": "easy"},
      {"name": "Range Function Magic", "slug": "range-function-magic", "xp": 20, "difficulty": "easy"},
      {"name": "Multiplication Table", "slug": "multiplication-table", "xp": 40, "difficulty": "medium"},
      {"name": "Number Guessing Game", "slug": "number-guessing-game", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 4,
    "name": "Functions & Scope",
    "desc": "Write reusable blocks of code and understand parameters and returns.",
    "exercises": [
      {"name": "Define Your First Function", "slug": "define-first-function", "xp": 30, "difficulty": "medium"},
      {"name": "Parameters & Arguments", "slug": "parameters-and-arguments", "xp": 35, "difficulty": "medium"},
      {"name": "Return Values", "slug": "return-values", "xp": 35, "difficulty": "medium"},
      {"name": "Scope Explorer", "slug": "scope-explorer", "xp": 40, "difficulty": "medium"},
      {"name": "Lambda Expressions", "slug": "lambda-expressions", "xp": 45, "difficulty": "hard"},
      {"name": "Utility Function Library", "slug": "utility-function-library", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 5,
    "name": "Data Structures: Lists & Tuples",
    "desc": "Store collections of ordered data and perform list comprehensions.",
    "exercises": [
      {"name": "List Creation & Indexing", "slug": "list-creation-and-indexing", "xp": 25, "difficulty": "easy"},
      {"name": "Appending & Slicing", "slug": "appending-and-slicing", "xp": 30, "difficulty": "medium"},
      {"name": "Tuple Immutability", "slug": "tuple-immutability", "xp": 25, "difficulty": "easy"},
      {"name": "List Comprehension Basics", "slug": "list-comprehension-basics", "xp": 40, "difficulty": "medium"},
      {"name": "Sorting & Filtering", "slug": "sorting-and-filtering", "xp": 35, "difficulty": "medium"},
      {"name": "Shopping Cart Manager", "slug": "shopping-cart-manager", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 6,
    "name": "Data Structures: Dictionaries & Sets",
    "desc": "Manage key-value pairs and unique collections of elements.",
    "exercises": [
      {"name": "Dictionary Lookup", "slug": "dictionary-lookup", "xp": 30, "difficulty": "medium"},
      {"name": "Adding & Updating Keys", "slug": "adding-and-updating-keys", "xp": 25, "difficulty": "easy"},
      {"name": "Set Operations (Union/Intersection)", "slug": "set-operations", "xp": 40, "difficulty": "medium"},
      {"name": "Removing Duplicates", "slug": "removing-duplicates", "xp": 30, "difficulty": "medium"},
      {"name": "Nested Dictionary Records", "slug": "nested-dictionary-records", "xp": 45, "difficulty": "hard"},
      {"name": "Word Frequency Counter", "slug": "word-frequency-counter", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 7,
    "name": "File Handling & I/O",
    "desc": "Read from and write to text and CSV files on your system.",
    "exercises": [
      {"name": "Open & Read a File", "slug": "open-and-read-file", "xp": 30, "difficulty": "medium"},
      {"name": "Writing Data with 'w' & 'a'", "slug": "writing-data-modes", "xp": 35, "difficulty": "medium"},
      {"name": "Using Context Managers (with)", "slug": "context-managers-with", "xp": 40, "difficulty": "medium"},
      {"name": "Reading CSV Data", "slug": "reading-csv-data", "xp": 45, "difficulty": "hard"},
      {"name": "Log File Writer", "slug": "log-file-writer", "xp": 40, "difficulty": "medium"},
      {"name": "Config File Parser", "slug": "config-file-parser", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 8,
    "name": "Error & Exception Handling",
    "desc": "Prevent app crashes using try, except, else, and finally blocks.",
    "exercises": [
      {"name": "Catching ZeroDivisionError", "slug": "catching-zero-division", "xp": 25, "difficulty": "easy"},
      {"name": "Handling Multiple Exceptions", "slug": "handling-multiple-exceptions", "xp": 35, "difficulty": "medium"},
      {"name": "Else & Finally Blocks", "slug": "else-and-finally-blocks", "xp": 35, "difficulty": "medium"},
      {"name": "Raising Custom Errors", "slug": "raising-custom-errors", "xp": 40, "difficulty": "medium"},
      {"name": "Safe Input Validator", "slug": "safe-input-validator", "xp": 45, "difficulty": "hard"},
      {"name": "Robust API Fetcher", "slug": "robust-api-fetcher", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 9,
    "name": "Object-Oriented Programming (OOP)",
    "desc": "Build classes, instantiate objects, and implement inheritance.",
    "exercises": [
      {"name": "Define a Class & Constructor", "slug": "define-class-constructor", "xp": 35, "difficulty": "medium"},
      {"name": "Instance Methods & Self", "slug": "instance-methods-and-self", "xp": 35, "difficulty": "medium"},
      {"name": "Class Inheritance", "slug": "class-inheritance", "xp": 45, "difficulty": "hard"},
      {"name": "Method Overriding", "slug": "method-overriding", "xp": 40, "difficulty": "medium"},
      {"name": "Encapsulation & Private Attributes", "slug": "encapsulation-private-attributes", "xp": 50, "difficulty": "hard"},
      {"name": "Bank Account OOP Simulation", "slug": "bank-account-oop-simulation", "xp": 60, "difficulty": "hard"}
    ]
  },
  {
    "id": 10,
    "name": "Modules, Packages & Pip",
    "desc": "Import built-in modules, write custom packages, and manage external libraries.",
    "exercises": [
      {"name": "Using the Math Module", "slug": "using-math-module", "xp": 25, "difficulty": "easy"},
      {"name": "Datetime & Timestamps", "slug": "datetime-and-timestamps", "xp": 30, "difficulty": "medium"},
      {"name": "Creating Custom Modules", "slug": "creating-custom-modules", "xp": 35, "difficulty": "medium"},
      {"name": "Installing Packages with Pip", "slug": "installing-packages-with-pip", "xp": 30, "difficulty": "medium"},
      {"name": "Requests API Gateway", "slug": "requests-api-gateway", "xp": 50, "difficulty": "hard"},
      {"name": "Virtual Environment Setup", "slug": "virtual-environment-setup", "xp": 40, "difficulty": "medium"}
    ]
  }
];
export const GET = async (req: NextRequest) => {
  try {
  
    const courseId = 3;

    
    const result = await prisma.courseChapters.createMany({
      data: PYTHON_DATA.map((item) => ({
        chapterId: `python-${item.id}`, 
        name: item.name,
        description: item.desc,
        exercises: item.exercises, 
        courseId: String(courseId),        
      })),
      skipDuplicates: true, 
    });

    return NextResponse.json(
      { 
        success: true, 
        message: `Successfully seeded ${result.count} chapters!` 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { success: false, error: error},
      { status: 500 }
    );
  }
}