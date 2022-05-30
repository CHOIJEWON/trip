const createUser = {
  userId: {
    type: "string", // data-type
    description: "동일한 id로는 가입할 수 없습니다",
    example: "tirpid", // example of a titl
  },
  password: {
    type: "string", // data type
    description: "입력후 hash를 진행합니다",
    example: '12341234'
  },
    nick : {
      type : "string",
      example : "제원"
  },  
}

const userSignUpResponse = {
  id : {
    type: "string",
    description: "해당 pk아이디는 uuid v4 엔진을 사용하요 생성됩니다",
    example : "asd23144-adf123445-asdff12334"
  },
  nick : {
    type : "string",
    example : "제원"
  },
  role : {
    type : "string",
    description: `유저의 권한을 나타냅니다 ADMIN은 운영진의 레벨로 모든 API에 접근할 수 있습니다,
    WRITER는 guide를 쓰기, 수정, 삭제 권한을 갖게 됩니다 물론 자기 자신이 아닌 다른 사람이 작성한 글에는 접근이 불가능합니다,
    USER는 가장 기본적인 권한입니다 guide를 관람할 수 있으며 좋아요, 리뷰, 댓글 기능등을 사용할 수 있습니다`,
    example : "USER"
  }
}

const userAccessToken = {
  accessToken : {
  type : "string",
  description : "해당 데이터는 특정 유저의 accessToken입니다",
  example : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.easdhioaio........"
  }
}

const userRefreshToken = {
  refreshToken : {
    type : "string",
    description : "해당 데이터는 유저의 refreshToken입니다",
    example : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9......."
  }
}

const responseSignIn = {
  ...userAccessToken,
  ...userRefreshToken,
}

// schemas
  const userSchemas = {
    signUp: {
      type: "object", // data type
      properties: userSignUpResponse
    },
    signIn : {
      type: "object", // data type
      properties: responseSignIn
    },
    refreshToken : {
      type : "object",
      properties: userRefreshToken
    },
    accessToken  : {
      type : "object",
      properties: userAccessToken
    },
    createUser: {
      type: "object", // data type
      properties: createUser
    },
  }
  
  export default userSchemas