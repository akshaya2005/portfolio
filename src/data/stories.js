// ─── stories.js ──────────────────────────────────────────────────────────────
// Portfolio projects organized by category.
// Each category has an array of projects to be displayed on their respective pages.

export const systemsProjects = [
  {
    id: 1,
    headline: 'Verilog Five-Stage Pipeline',
    subheadline: 'Hardware instruction execution architecture on FPGA',
    body: `Designed and implemented a five-stage CPU pipeline (Fetch, Decode, Execute, Memory, Writeback) in Verilog with support for instruction pipelining and hazard detection. Deployed on a simulated FPGA environment with comprehensive testing of pipeline behavior and stall mechanisms.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'large',
  },
  {
    id: 2,
    headline: 'Cache Simulator with Coherency Protocols',
    subheadline: 'Multi-level cache simulation and protocol implementation',
    body: `Built a comprehensive cache simulator supporting multiple coherency protocols (MOESI, MESI, MOESIF). Developed automation scripts to systematically evaluate various cache configurations across the C/B/S taxonomy, enabling performance analysis and protocol comparison.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
  {
    id: 3,
    headline: 'Verilog Systolic Array',
    subheadline: 'Parallel computation architecture for matrix operations',
    body: `Implemented a systolic array architecture in Verilog for efficient parallel computation of matrix operations. Optimized for high throughput with minimal memory bandwidth, demonstrating deep understanding of hardware-level parallelism and data flow optimization.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
  {
    id: 4,
    headline: 'Operating System Kernel Enhancement',
    subheadline: 'Threading, memory management, and user privilege levels',
    body: `Extended an operating system kernel with critical features including multi-threaded execution, user group management, paging mechanisms, and virtual memory support. Implemented context switching, memory page tables, and permission-based access control.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
  {
    id: 5,
    headline: 'Aerial Vehicle Detection: CPU vs GPU Analysis',
    subheadline: 'Performance benchmarking on real-world image data',
    body: `Conducted comprehensive performance benchmarking of state-of-the-art vision detection models (YOLO, SSD, etc.) on aerial vehicle detection. Compared CPU and GPU execution on campus aerial imagery, analyzing throughput, latency, and energy efficiency tradeoffs.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
]

export const mlProjects = [
  {
    id: 6,
    headline: 'Physics-Informed Neural Networks (PINNs)',
    subheadline: 'Cardiac modeling with 75% reduced training data',
    body: `Implemented Physics-Informed Neural Networks to model cardiac behavior from initial conditions, embedding physical constraints directly into the neural network architecture. Evaluated optimization techniques and achieved 75% reduction in training data requirements and 60% faster training times compared to baseline approaches.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'large',
  },
  {
    id: 7,
    headline: 'Financial RAG Chatbot',
    subheadline: 'Retrieval-augmented generation for financial advice',
    body: `Developed a Retrieval-Augmented Generation chatbot using the FIQA financial dataset to provide beginner-friendly financial guidance. Implemented hallucination detection by comparing model responses against human financial advisor baselines, ensuring output reliability and accuracy.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
  {
    id: 8,
    headline: 'EEG to EMG Neural Mapping',
    subheadline: 'Cross-modal biomedical signal translation',
    body: `Engineered a neural network to map EEG measurements to EMG activity, enabling non-invasive muscle activity prediction. Applied advanced preprocessing techniques including PCA for dimensionality reduction and CCA for cross-modal data alignment and normalization.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
  {
    id: 9,
    headline: 'Sustainable Shopping Browser Extension',
    subheadline: 'Vector embedding-based eco-friendly product recommendations',
    body: `Designed and deployed a Chrome extension that recommends sustainable product alternatives using vector embeddings. The system compares product embeddings against a vector database of vegan/sustainable items, providing users with environmentally conscious alternatives in real-time.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
]

export const agenticProjects = [
  {
    id: 10,
    headline: 'Autonomous Career Search Agent',
    subheadline: 'End-to-end job matching and application pipeline',
    body: `Built an autonomous agent that scrapes job postings from target company websites and stores them in a vector database. The orchestration pipeline processes job descriptions, performs semantic matching against portfolio projects, generates tailored resume versions, and delivers personalized opportunities via Slack notifications.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'large',
  },
  {
    id: 11,
    headline: 'Documentation Automation Agent',
    subheadline: 'LangChain-based technical documentation generation',
    body: `Developed an intelligent agent using LangChain to automate software documentation generation for engineering teams. The system orchestrates multi-step workflows to extract information from codebases, structure it semantically, and generate comprehensive technical documentation at scale.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
]

export const softwareProjects = [
  {
    id: 12,
    headline: 'Soothe Journaling App',
    subheadline: 'AI-assisted journaling with React and FastAPI',
    body: `Designed and built a full-stack journaling application combining React frontend with FastAPI backend. Integrated AI-powered features including intelligent writing prompts, mood tracking, mood analytics dashboard, and AI-generated task suggestions from journal entries for enhanced user engagement.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'large',
  },
  {
    id: 13,
    headline: 'Spotify Wrapped Custom Generator',
    subheadline: 'OAuth-authenticated music analytics dashboard',
    body: `Built a web application leveraging the Spotify API to generate personalized listening summaries and music analytics. Implemented secure authentication using Spotify's OAuth 2.0 flow, enabling users to visualize detailed listening patterns and music preferences.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
  {
    id: 14,
    headline: 'Kafka-Based Notification Microservice (UKG)',
    subheadline: 'Event-driven architecture with MongoDB and Grafana',
    body: `Architected a Kafka-based microservice on the UKG notifications team to track message delivery latency, success rates, and processing time. Implemented message persistence to MongoDB with Grafana dashboard visualization, reducing defect analysis time and enabling real-time observability of notification pipeline health.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
  {
    id: 15,
    headline: 'Cloud Engineering Portal (UKG)',
    subheadline: 'Spotify Backstage-based DevOps platform',
    body: `Contributed to UKG's cloud engineering portal built on Spotify's Backstage framework. Designed and implemented high-performance web pages serving thousands of concurrent users with sub-second latency. Centralized DevOps tooling and infrastructure management, improving developer experience across the organization.`,
    byline: 'By Akshaya Arun',
    date: 'Portfolio',
    size: 'medium',
  },
]
