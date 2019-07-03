export interface user {
    FirstName:string;
    LastName:string;
    FullName:string;
    EmailAddress:string;
    MobileNumber:string;
    UserName:string;
    PassWord:string;
    CompanyName:string;
    CreatedDate:string;
    CreatedBy:string;
    Type:UserType;
  }

  export enum UserType
  {
    Administrator = 1,
    User = 2
  }