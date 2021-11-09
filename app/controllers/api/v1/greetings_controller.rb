class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all

    render json: {
      data: @greetings,
      message: 'Success'
    }, status: :ok
  end

  def hello
    @greeting = Greeting.order('RANDOM()').first

    render json: {
      data: @greeting,
      message: 'Success'
    }, status: :ok
  end
end
