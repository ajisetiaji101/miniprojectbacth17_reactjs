const config = {
    domain : 'http://localhost:3001/codeid/api',
    urlImage : 'http://localhost:3001/codeid/api/images',
    urlImageBootcamp : 'http://localhost:3001/codeid/api/bootcamp/images',
    urlImageCure : 'http://localhost:3001/codeid/api/curriculum_reviews/images',
    urlImageTalent : 'http://localhost:3001/codeid/api/batch/images',
    urlImageRegular : 'http://localhost:3001/codeid/api/bootcamp/regular/images',
    urlImageBerbayar : 'http://localhost:3001/codeid/api/bootcamp/berbayar/images',
    urlImageInst: "http://localhost:3001/codeid/api/instructor/images",
    domainAuth : 'http://localhost:3001/codeid/api/auth',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key"
  }
  
  export default config
