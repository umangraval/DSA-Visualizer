/* eslint-disable react/react-in-jsx-scope */
export const DS = [
  {
    name: "Tree DS",
    sub: [
      {
        name: "Binary Tree",
        desc: "A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.",
        algorithm:
          "In the above tree, node 1 contains two pointers, i.e., left and a right pointer pointing to the left and right node respectively. The node 2 contains both the nodes (left and right node); therefore, it has two pointers (left and right). The nodes 3, 5 and 6 are the leaf nodes, so all these nodes contain NULL pointer on both left and right parts.",
        url: "/binary-trees",
        video: "https://www.youtube.com/embed/nfAxNTmme64",
        img: "https://static.javatpoint.com/ds/images/binary-tree2.png",
        help: {
          video: "https://www.youtube.com/embed/nfAxNTmme64",
          desc: "With the nature of Binary Search Tree (BST) in mind, the numbers can be inserted in the visualization. Entering a key/alphabet will produce an error in this visualization. The visualization provides Insert, Remove, Find and Reset features for BST. For inserting a number, we can write the number in the insert box and click Insert button. The number will be inserted in accordance to insertion rules of the BST. For removing and finding, a pre-inserted number has to be inserted in the respective box. Remove removes the key and rearranges the BST while Find states whether the element can be found or not. Clicking Reset removes the existing tree and clears the buffer space",
        },
      },
    ],
  },
  {
    name: "Sorting",
    sub: [
      {
        name: "Quicksort",
        desc: "QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. ",
        algorithm:
          "After selecting an element as pivot, which is the last index of the array in our case, we divide the array for the first time. In quick sort, we call this partitioning. It is not simple breaking down of array into 2 subarrays, but in case of partitioning, the array elements are so positioned that all the elements smaller than the pivot will be on the left side of the pivot and all the elements greater than the pivot will be on the right side of it. And the pivot element will be at its final sorted position. The elements to the left and right, may not be sorted. Then we pick subarrays, elements on the left of pivot and elements on the right of pivot, and we perform partitioning on them by choosing a pivot in the subarrays.",
        url: "/quicksort",
        video: "https://www.youtube.com/embed/7h1s2SojIRw",
        img: "https://static.studytonight.com/data-structures/images/basic-quick-sort.png",
        help: {
          video: "https://www.youtube.com/embed/nfAxNTmme64",
          desc: "As we know, QuickSort can be one of the fastest sorting algorithm in practise. The visualization of QuickSort can be made to understand the partitioning, internal function and the output generation procedure. For the same, different colour codes are used in the tool. The user can enter the size (Number of inputs) and press on random button to generate random numbers. Random numbers are chosen to avoid Students from inputting the same values as in their assignment to cheat using the tool. Clicking on sort allows the sorting to be performed live. The orange, violet, yellow and blue colours represent the upper bound, pivot, swapping and compare respectively. The slider increases or decreases the speed of visualization.",
        },
      },
    ],
  },
  {
    name: "Searching",
    sub: [
      {
        name: "DFS",
        desc: "Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.",
        algorithm:
          "A standard DFS implementation puts each vertex of the graph into one of two categories which are Visited and Not Visited. The purpose of the algorithm is to mark each vertex as visited while avoiding cycles. The DFS algorithm works as follows: Start by putting any one of the graph's vertices on top of a stack. Take the top item of the stack and add it to the visited list. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack. Keep repeating steps 2 and 3 until the stack is empty.",
        url: "/dfs",
        video: "https://www.youtube.com/embed/nfAxNTmme64",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20200507074112/ezgif.com-gif-maker61.gif",
        help: {
          video: "https://www.youtube.com/embed/nfAxNTmme64",
          desc: "The visualization has made sure that the Students do not cheat in their assignments by inputting the exact graph given to them. Therefore, a pre-designed gamification is made where the bug (violet) has to reach the location (red marker). For the same, when the user clicks on Search Button, the traversal of the bug begins and follows the path (yellow buffers) in accordance of BFS/DFS to reach the red marker. The visualization can be reset using Reset button.",
        },
      },
      {
        name: "BFS",
        desc: "Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes. Then, it selects the nearest node and explores all the unexplored nodes. While using BFS for traversal, any node in the graph can be considered as the root node.",
        algorithm:
          "The only catch here is, that, unlike trees, graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we divide the vertices into two categories: Visited and Not visited. A boolean visited array is used to mark the visited vertices. For simplicity, it is assumed that all vertices are reachable from the starting vertex.",
        url: "/bfs",
        video: "https://www.youtube.com/embed/nfAxNTmme64",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/bfs-5.png",
        help: {
          video: "https://www.youtube.com/embed/nfAxNTmme64",
          desc: "The visualization has made sure that the Students do not cheat in their assignments by inputting the exact graph given to them. Therefore, a pre-designed gamification is made where the bug (violet) has to reach the location (red marker). For the same, when the user clicks on Search Button, the traversal of the bug begins and follows the path (yellow buffers) in accordance of BFS/DFS to reach the red marker. The visualization can be reset using Reset button.",
        },
      },
    ],
  },
  {
    name: "Others",
    sub: [
      {
        name: "Stacks",
        desc: "Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",
        algorithm:
          "To implement the stack, it is required to maintain the pointer to the top of the stack, which is the last element to be inserted because we can access the elements only on the top of the stack. This strategy states that the element that is inserted last will come out first. You can take a pile of plates kept on top of each other as a real-life example. The plate which we put last is on the top and since we remove the plate that is at the top, we can say that the plate that was put last comes out first.",
        url: "/stacks",
        video: "https://www.youtube.com/embed/nfAxNTmme64",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20220714004311/Stack-660x566.png",
        help: {
          video: "https://www.youtube.com/embed/nfAxNTmme64",
          desc: "For the visualization of Stacks the conversion of Infix Operation to Postfix Operation tends to be a classic example. The user can write any infix arithmetic operation in the input box and press convert. The Stack will be represented by Orange key and the Empty stack will be filled. The Infix Expression will be scanned one by one and Postfix Expression will be created simultaneously. This method ensures the visualization as well as application of Stacks.",
        },
      },
      {
        name: "Linked List",
        desc: "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers",
        algorithm:
          "Like arrays, a Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location; the elements are linked using pointers. They include a series of connected nodes. Here, each node stores the data and the address of the next node.",
        url: "/linkedlist",
        video: "https://www.youtube.com/embed/nfAxNTmme64",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png",
        help: {
          video: "https://www.youtube.com/embed/nfAxNTmme64",
          desc: "This visualization is the non-array easy representation of a linked list. Clicking on Insert button inserts numbers in sequence and visualizes the nodes and pointers in accordance to the rules of insertion of Singly/Doubly Linked List. Clicking on Delete button deletes the last element from the list and rearranges the list. This simple representation shows the working behind the linked list in Data Structures and also Database Management where “next” strategy for file storing can be achieved using such a simple implementation.",
        },
      },
      {
        name: "Hash Table",
        desc: "Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.",
        algorithm:
          "The Hashtable class implements a hash table, which maps keys to values. Any non-null object can be used as a key or as a value. To successfully store and retrieve objects from a hashtable, the objects used as keys must implement the hashCode method and the equals method.",
        url: "/hashtable",
        video: "https://www.youtube.com/embed/nfAxNTmme64",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20201124183400/HierarchyofHashtable.png",
        help: {
          video: "https://www.youtube.com/embed/nfAxNTmme64",
          desc: "Hash Tables play a major role in Database Management since it can be used in conjunction with various probing algorithms  to find the index of the file/pointer to the actual file. With this context in mind, for beginners, it is important to learn the Linear Probing, Quadratic Probing and Double Hashing. The Visualization tool provides a selection checkbox to choose one of these three probing algorithm. After the choice, the user can enter any number (inserting NaN (Not a Number) will produce an error) and click on the insert button to visualize the insertion in the Hash Table present in the tool",
        },
      },
    ],
  },
];

export const DS_LIST = [
  "linkedlist",
  "stacks",
  "dfs",
  "bfs",
  "quicksort",
  "binary-trees",
  "hashtable",
];

export const DS_PAGE = [
  {
    name: "Visualization",
    desc: () => "Click here to visualize the data structure",
    url: "/visualize",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto"
        width="50%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Introduction",
    desc: () => "Learn the concept and math behind the working of it",
    url: "/intro",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto"
        width="50%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
  },
  {
    name: "Examples",
    desc: (ds) => `Examples of ${ds} Solutions`,
    url: "/examples",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto"
        width="50%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    name: "Problems",
    desc: (ds) => `Find related questions about ${ds} here`,
    url: "/problems",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto"
        width="50%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Video Tutorials",
    desc: () => "Still have doubts? Find answers in the Video Tutorials",
    url: "/tutorial",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto"
        width="50%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Contact Us",
    desc: () =>
      "Contact us if you have some feedbacks, suggestions and/or complaints",
    url: "/contactus",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto"
        width="50%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
];
