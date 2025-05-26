declare type BusinessStepperFormProps = {
  activeTab: string;
  handleDecrement: () => void;
  handleIncrement: () => void;
};

declare type Business = {
  id: string;
  name: string;
  industry: string;
  number: string;
  twilio: string;
  website: string;
  country: string;
};

declare type GlobalState = {
  token: string;
  vapiId: string;
  twilioNumber: string;
  business: {
    id: string;
    name: string;
    country: string;
    industry: string;
  };
};

declare type PostLogin = {
  email: string;
  password: string;
};

declare type PostLoginResponse = {
  data: {
    access_token: string;
  };
};

declare type PostBusinessInfo = {
  email: string;
  password: string;
  business_name: string;
  industry: string;
  contact_number: string;
  website: string;
  country: string;
  language: string;
};

declare type PostBusinessResponse = {
  data: {
    business_id: string;
    business_name: string;
    industry: string;
    country: string;
  };
};

declare type PostBusinessTwilioNumber = {
  business_id: string;
  country_code: string;
  area_code: string;
};

declare type PostBusinessTwilioNumberResponse = {
  data: {
    twilio_number: string;
  };
};

declare type PostVapiAssistant = {
  business_id: string;
  communication_type: string;
  ai_model_name: string;
  voice_agent_provider: string;
  voice_agent: string;
  transcriber_provider: string;
  transcriber_language: string;
};

declare type PostVapiAssistantResponse = {
  data: {
    vapi_id: string;
  };
};

declare type UpdateBusinessPrompt = {
  data: {
    vapi_id: string;
    system_prompt: string;
    first_message: string;
  };
  business_id: string;
};

declare type CallDistribution = {
  business: string;
  calls: number;
  fill: string;
};

declare type CallSentiment = {
  date: string;
  positive: number;
  negative: number;
  neutral: number;
};

declare type CallVolume = {
  date: string;
  totalCalls: number;
  successCalls: number;
  failedCalls: number;
};

declare type ActiveBusinesses = {
  name: string;
  calls: number;
};

declare type DashboardStats = {
  total_businesses: number;
  active_businesses: number;
  calls_today: number;
};

declare type BusinessStats = {
  totalCalls: number;
  successCalls: number;
  failedCalls: number;
};

declare type BusinessDetails = {
  business_id: string;
  business_name: string;
  contact_number: string;
  website: string;
  country: string;
  language: string;
  industry_type: string;
  communication_type: string | null;
  number_type: string | null;
  voice_provider: string | null;
  voice: string | null;
  ai_model_provider: string | null;
  ai_model: string | null;
  transcriber_provider: string | null;
  transcriber_language: string | null;
  system_prompt: string | null;
};

declare type UpdateBusinessBody = {
  business_name: string;
  industry: string;
  contact_number: string;
  website: string;
  country: string;
  language: string;
  communication_type: string;
  ai_model_name: string;
  system_message: string;
  voice_agent_provider: string;
  voice_agent: string;
  transcriber_language: string;
};

declare type PromptTemplate = {
  id: number;
  name: string;
  template: string;
};
