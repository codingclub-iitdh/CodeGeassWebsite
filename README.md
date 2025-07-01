# CodeGeassWebsite

This is a [Next.js](https://nextjs.org/) project.

## Getting Started

To set up and run this project locally, follow these steps:

### Prerequisites

Make sure you have one of the following installed:

*   [Node.js](https://nodejs.org/en/) (LTS version recommended)
*   [Yarn](https://yarnpkg.com/)
*   [PostgreSQL](https://www.postgresql.org/)

### Installation

1.  **Clone the repository (if you haven't already):**

    ```bash
    git clone <repository-url>
    cd CodeGeassWebsite
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Database Setup

1.  **Create a `.env` file** in the root of the project based on `.env.example`. Add your PostgreSQL database URL. For example:

    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
    ```
    If you're using Docker for PostgreSQL, you can start a new instance with:

    ```bash
    docker run --name some-postgres -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d dbname
    ```
    Then, your `DATABASE_URL` would be something like:
    `postgresql://postgres:yourpassword@localhost:5432/dbname` (replace `dbname` with your desired database name if you create one).

2.  **Run Prisma migrations** to set up your database schema:

    ```bash
    npx prisma migrate dev
    ```

### Running the Development Server

1.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

2.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

    The pages auto-updates as you edit the files.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

## Note

Change `schema.prisma` from

```prisma
model Codeforces {
  id               Int     @id @default(autoincrement())
  handle           String  @unique
  rating           Int
  num_participants Int
  member           Members @relation(fields: [member_id], references: [id])
  member_id        String  @unique
}
```

to

```prisma
model Codeforces {
  id               Int     @id @default(autoincrement())
  handle           String  @unique
  rating           Int
  member           Members @relation(fields: [member_id], references: [id])
  member_id        String  @unique
}
```
